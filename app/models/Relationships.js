import User from './User';
import Role from './Role';
import Permissions from './Permission';

//User has roles and role has users
User.belongsToMany(Role, { as: 'roles', through: 'UsersHasRoles', foreignKey: 'iduser' })
Role.belongsToMany(User, { as: 'users', through: 'UsersHasRoles', foreignKey: 'idrol' })

//Rol has permissions and permission has roles
Role.belongsToMany(Permissions, { as: 'permissions', through: 'RolesHasPermissions', foreignKey: 'idrol' })
Permissions.belongsToMany(Role, { as: 'roles', through: 'RolesHasPermissions', foreignKey: 'idpermission' })
