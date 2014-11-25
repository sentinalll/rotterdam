package security;

import java.sql.Timestamp;
import java.util.Calendar;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.ext.Provider;

import model.entity.Session;
import model.entity.User;

import controllers.auth.MySecurityContext;
import tools.Factory;


/**
 * This interceptor verify the access permissions for a user based on username
 * and passowrd provided in request
 * */
@Provider
public class SecurityInterceptor implements
		javax.ws.rs.container.ContainerRequestFilter {

    @Override
    public void filter(ContainerRequestContext request) {
        User user = null;
        Session session = null;

        // Get session id from request header
        java.util.Map<String, Cookie> cookies =  request.getCookies();

        if(cookies != null) {

            Cookie sessionCookie = cookies.get("sessionUID");
            if(sessionCookie != null) {

                final String sessionId = sessionCookie.getValue();

                if (sessionId != null && sessionId.length() > 0) {
                    // Load session object from repository
                    session = Factory.getInstance().getSessionDAO().selectBySessionId(sessionId);
                    // Load associated user from session
                    if (null != session) {
                        session.setLastAccessedTime(new Timestamp(Calendar.getInstance().getTime().getTime()));
                        Factory.getInstance().getSessionDAO().update(session);
                        user = session.getUser();
                    }
                }
            }
        }

        // Set security context
        request.setSecurityContext(new MySecurityContext(session, user));
    }
	
}