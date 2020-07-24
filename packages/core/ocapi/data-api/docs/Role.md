# DataApi.Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The role description. | [optional] 
**id** | **String** | The role ID. | [optional] 
**link** | **String** | URL that is used to get this instance.  This property is computed and cannot be modified. | [optional] 
**permissions** | [**RolePermissions**](RolePermissions.md) |  | [optional] 
**userCount** | **Number** | Number of users assigned to the role. | [optional] 
**userManager** | **Boolean** | Flag whether this role is allowed to manage users or other access roles. | [optional] 
**users** | [**[User]**](User.md) | The users assigned to the access role. Available through expands. | [optional] 


