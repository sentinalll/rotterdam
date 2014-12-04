package tools.json;

import controllers.auth.CookieUtil;
import model.entity.User;
import org.json.JSONException;
import org.json.JSONObject;
import tools.Factory;

import javax.json.Json;
import javax.json.JsonException;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author Anatolii
 */
public class JsonCommands {

    public static final String PARAM_FIRSTNAME = "firstname";
    public static final String PARAM_DATE = "date";
    public static final String PARAM_EMAIL_FORGOT = "email_forgot";
    public static final String PARAM_AVL_TIME = "avl_time";
    public static final String PARAM_USED_TIME = "used_time";


    private JsonCommands(){}

    /**
     * return null if user not exist in session
     */
    public static JsonObject getUserHomeData (HttpServletRequest hsr) throws JsonException{
        CookieUtil cookieUtil = new CookieUtil();
        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat();
        User user = Factory
                .getInstance()
                .getSessionDAO()
                .selectBySessionId(cookieUtil.getSessionIdFromRequest(hsr))
                .getUser();
        if (user != null){
            JsonObject resultJsonDate = Json.createObjectBuilder()
                    .add(PARAM_FIRSTNAME, user.getFirstname())
                    .add(PARAM_DATE, dateFormat.format(currentDate))
                    .build();
            return resultJsonDate;

        } else {
            return  null;
        }
    }

    /**
     * return null if email not exist in database
     */
    public static User getRestoreData (String data) throws JSONException{
        JSONObject emailData = new JSONObject(data);
        User user = Factory
                .getInstance()
                .getUserDAO()
                .selectByEmail(emailData.getString(PARAM_EMAIL_FORGOT));
        if (user != null) {
            return user;
        } else {
            return null;
        }

    }

    /**
     *
     * @param hsr
     * @return Jsonobject
     * @throws JsonException
     */

    public static JsonObject getUserCompensatedTime(HttpServletRequest hsr) throws JsonException {
        CookieUtil cookieUtil = new CookieUtil();
        User user = Factory
                .getInstance()
                .getSessionDAO()
                .selectBySessionId(cookieUtil.getSessionIdFromRequest(hsr))
                .getUser();
        if (user != null) {
            JsonObject jsonCompensationTime = Json.createObjectBuilder()
                    .add(PARAM_FIRSTNAME, user.getFirstname() + ' ' + user.getSurname())
                    .add(PARAM_AVL_TIME,"available time")
                    .add(PARAM_USED_TIME,"used time")
                    .build();
            return jsonCompensationTime;
        } else {
            return null;
        }


    }

}
