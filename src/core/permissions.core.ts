/**
 * Permissions Core
 * @description
 * This core is responsible for handling all the permissions related operations.
 * This manages user permissions for users, iots, and hubs.
 */

type Action = "create" | "read" | "update" | "delete";
type Domain = "user" | "iot" | "hub" | "admin";

interface PermissionCheckOptions {
  domain: Domain; // The domain to check the permission for "user", "iot", "hub", "admin"
  action: Action; // The action to check the permission for "create", "read", "update", "delete
  target: string | null; // The target to check the permission for (iot_id, hub_id, user_id, null)
}

// Permission Structure "domain:action:target"

import UserCore from "./user.core";

export default class PermissionCore {
  user: UserCore;

  constructor(user: UserCore) {
    this.user = user;
  }

  hasPermission(options: PermissionCheckOptions): boolean {
    const permission = `${options.domain}:${options.action}:${options.target}`;
    return this.user._hasPermission(permission);
  }

  async addPermission(options: PermissionCheckOptions): Promise<void> {
    const permission = `${options.domain}:${options.action}:${options.target}`;
    await this.user._addPermission(permission);
  }

  async removePermission(options: PermissionCheckOptions): Promise<void> {
    const permission = `${options.domain}:${options.action}:${options.target}`;
    await this.user._removePermission(permission);
  }
}
