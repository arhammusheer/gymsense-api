/**
 * Permissions Core
 * @description
 * This core is responsible for handling all the permissions related operations.
 * This manages user permissions for users, iots, and hubs.
 */

type Action = "create" | "read" | "update" | "delete";
type Domain = "user" | "iot" | "hub" | "admin";

// Permissions
const allowedDomains: Domain[] = ["user", "iot", "hub", "admin"];
const allowedActions: Action[] = ["create", "read", "update", "delete"];

interface PermissionCheckOptions {
  domain: Domain; // The domain to check the permission for "user", "iot", "hub", "admin"
  action: Action; // The action to check the permission for "create", "read", "update", "delete
  target: string | "*" | string[]; // The target to check the permission for (iot_id, hub_id, user_email, *)
}

interface PermissionCheckOptionsMultiTarget {
  domain: Domain; // The domain to check the permission for "user", "iot", "hub", "admin"
  action: Action; // The action to check the permission for "create", "read", "update", "delete
  targets: string[]; // The targets to check the permission for (iot_id, hub_id, user_email, *)
}

// Permission Structure "domain:action:target"

import UserCore from "./user.core";

export default class PermissionCore {
  user: UserCore;

  constructor(user: UserCore) {
    this.user = user;
  }

  static parse(permission: string): PermissionCheckOptions {
    const [domain, action, target] = permission.split(":");

    // Validation Checks
    if (!allowedDomains.includes(domain as Domain))
      throw new Error("Invalid domain");
    if (!allowedActions.includes(action as Action))
      throw new Error("Invalid action");
    if (target !== "*" && !target) throw new Error("Invalid target");

    return { domain: domain as Domain, action: action as Action, target };
  }

  static stringify(options: PermissionCheckOptions): string {
    return `${options.domain}:${options.action}:${options.target}`;
  }

  hasPermission(options: PermissionCheckOptions): boolean | boolean[] {
    // Override if admin
    if (this.isAdmin) return true;

    const domain = options.domain;
    const action = options.action;

    // Handle multi target
    const targets = Array.isArray(options.target)
      ? options.target
      : [options.target];

    // Check for each target
    const allowed = targets.map((target) => {
      const permission = `${domain}:${action}:${target}`;
      const wildcardPermission = `${domain}:${action}:*`;
      return (
        this.user._hasPermission(permission) ||
        this.user._hasPermission(wildcardPermission)
      );
    });

    // If single target return boolean
    if (allowed.length === 1) return allowed[0];

    return allowed;
  }

  async addPermission(options: PermissionCheckOptions): Promise<void> {
    const permission = `${options.domain}:${options.action}:${options.target}`;
    await this.user._addPermission(permission);
  }

  async removePermission(options: PermissionCheckOptions): Promise<void> {
    const permission = `${options.domain}:${options.action}:${options.target}`;
    await this.user._removePermission(permission);
  }

  private get isAdmin(): boolean {
    // If user has "admin" role
    return this.user._hasPermission("admin");
  }
}
