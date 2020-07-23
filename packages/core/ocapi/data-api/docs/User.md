# DataApi.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **Boolean** | Flag whether the user is disabled. | [optional] 
**email** | **String** | The email address. | 
**externalId** | **String** | The external id. This attribute is only valid when the user uses centralized authentication. | [optional] 
**firstName** | **String** | The first name. | [optional] 
**lastLoginDate** | **Date** | Last login of the user. | [optional] 
**lastName** | **String** | The last name. | 
**link** | **String** | URL that is used to get this instance.  This property is computed and cannot be modified. | [optional] 
**locked** | **Boolean** | Flag whether the user is locked. | [optional] 
**login** | **String** | The user login. | [optional] 
**password** | **String** | The password. This attribute is only used to set the password upon user creation.  This attribute is only valid when the user does not use centralized authentication. | [optional] 
**passwordExpirationDate** | **Date** | The user password expiration time | [optional] 
**passwordModificationDate** | **Date** | The time, where the password was last modified | [optional] 
**preferredDataLocale** | **String** | The effective preferred data locale of the user. A locale is only considered if the user has at least read  permission on the locale. | [optional] 
**preferredUiLocale** | **String** | The preferred UI locale of the user. | [optional] 
**roles** | **[String]** | List of role ids the user is assigned to. | [optional] 
