/**
 * Permissions Core
 * @description
 * This core is responsible for handling all the permissions related operations.
 * This manages user permissions for users, iots, and hubs.
 */

type Action = "create" | "read" | "update" | "delete" | "admin";
type Domain = "user" | "iot" | "hub" | "admin";

// Permissions
const allowedDomains: Domain[] = ["user", "iot", "hub", "admin"];
const allowedActions: Action[] = [
  "create",
  "read",
  "update",
  "delete",
  "admin",
];

interface PermissionCheckOptions {
  domain: Domain; // The domain to check the permission for "user", "iot", "hub", "admin"
  action: Action; // The action to check the permission for "create", "read", "update", "delete
  target: string; // The target to check the permission for (iot_id, hub_id, user_email, *)
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
  private permissions: Permission[];

  constructor(user: UserCore) {
    this.user = user;
    this.permissions = user
      .getPermissions()
      .map((permission) => Permission.fromString(permission));
  }

  // Permissions filter by field
  get({
    domain,
    action,
    target,
  }: {
    domain?: Domain;
    action?: Action;
    target?: string;
  }): Permission[] {
    return this.permissions.filter((permission) => {
      if (domain && permission.domain !== domain) return false;
      if (action && permission.action !== action) return false;
      if (target && permission.target !== target) return false;
      return true;
    });
  }

  // Check if user has permission
  hasPermission(options: PermissionCheckOptions): boolean {
    // Override if admin
    if (this.isAdmin) return true;

    return this.get(options).length > 0;
  }

  async addPermission(options: PermissionCheckOptions): Promise<void> {
    const permissions = this.permissions.map((permission) =>
      permission.toString()
    );
    const newPermission = `${options.domain}:${options.action}:${options.target}`;
    permissions.push(newPermission);
    await this.user.updatePermissions(permissions);

    // Update permissions
    this.permissions = this.user
      .getPermissions()
      .map((permission) => Permission.fromString(permission));
  }

  async removePermission(options: PermissionCheckOptions): Promise<void> {
    const permissions = this.permissions.map((permission) =>
      permission.toString()
    );
    const permissionToRemove = `${options.domain}:${options.action}:${options.target}`;
    const newPermissions = permissions.filter(
      (permission) => permission !== permissionToRemove
    );
    await this.user.updatePermissions(newPermissions);

    // Update permissions
    this.permissions = this.user
      .getPermissions()
      .map((permission) => Permission.fromString(permission));
  }

  private get isAdmin(): boolean {
    // If user has "admin" role
    return this.get({ domain: "admin", action: "admin" }).length > 0;
  }

  getIds(domain: Domain, action: Action): string[] {
    const permissions = this.get({ domain, action });

    return permissions.map((permission) => permission.target);
  }
}

export class Permission {
  domain: Domain;
  action: Action;
  target: string;

  constructor({ domain, action, target }: PermissionCheckOptions) {
    this.domain = domain;
    this.action = action;
    this.target = target;
  }

  toString(): string {
    return `${this.domain}:${this.action}:${this.target}`;
  }

  static fromString(permission: string): Permission {
    const [domain, action, target] = permission.split(":");

    return new Permission({
      domain: domain as Domain,
      action: action as Action,
      target,
    });
  }

  static fromObject(permission: PermissionCheckOptions): Permission {
    return new Permission(permission);
  }

  static fromArray(permissions: PermissionCheckOptions[]): Permission[] {
    return permissions.map((permission) => Permission.fromObject(permission));
  }
}
