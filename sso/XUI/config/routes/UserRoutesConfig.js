define("config/routes/UserRoutesConfig",[],function(){var e={profile:{view:"UserProfileView",role:"ui-user",url:"profile/",forceUpdate:!0},selfRegistration:{view:"RegisterView",url:/register(\/[^\&]*)(\&.+)?/,pattern:"register??",forceUpdate:!0,argumentNames:["realm","additionalParameters"],defaults:["/",""]},changeSecurityData:{base:"profile",dialog:"ChangeSecurityDataDialog",role:"ui-user,ui-admin",url:"profile/change_security_data/"},confirmPassword:{base:"profile",dialog:"ConfirmPasswordDialog",role:"ui-user",url:"profile/confirm_password_dialog/"}};return e})