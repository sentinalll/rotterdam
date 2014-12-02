package tools;

import controllers.auth.CookieUtil;
import model.entity.User;

import javax.json.Json;
import javax.json.JsonException;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by Vasya on 02.12.2014.
 */
public class JsonUtil {
    public static final String KEY_NAME = "firstname";
    public static final String KEY_SURNAME = "surname";
    public static final String KEY_AVL_TIME = "avltime";
    public static final String KEY_USED_TIME = "usedtime";


    private JsonUtil() {
    }


    public static JsonObject getUserCompensatedTime(HttpServletRequest hsr) throws JsonException {
        CookieUtil cookieUtil = new CookieUtil();
        User user = Factory
                .getInstance()
                .getSessionDAO()
                .selectBySessionId(cookieUtil.getSessionIdFromRequest(hsr))
                .getUser();

        JsonObject jsonCompensationTime = Json.createObjectBuilder()
                .add(KEY_NAME, "blank").build();
        return  jsonCompensationTime;


    }

}