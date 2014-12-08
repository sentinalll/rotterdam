package controllers;

/**
 * Created by Vasya on 02.12.2014.
 */



import org.json.JSONObject;
import tools.json.JsonCommands;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;

import javax.json.JsonException;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
@PermitAll
public class TimeForTime {

    @RolesAllowed({ "Driver" })
    @POST
    @Path("/timefortime")
    //@Consumes({ MediaType.APPLICATION_JSON })
    @Produces({MediaType.APPLICATION_JSON})
    public Response getTimeForTime(@Context HttpServletRequest hsr ) throws JsonException {
        JsonObject jsonData = JsonCommands.getTimeForTimeHours(hsr);

        if (jsonData != null){
            return Response.ok(jsonData).build();
        } else {
            return Response.status(401).build();
        }
    }

    @RolesAllowed({ "Driver" })
    @POST
    @Path("/usetimefortime")
    @Consumes({ MediaType.APPLICATION_JSON })
    @Produces({MediaType.APPLICATION_JSON})
    public Response useTime(@Context HttpServletRequest hsr, @Context HttpServletResponse rspn, String data) throws JsonException {
        JSONObject useTimeForTimeData = new JSONObject(data);
        long useTimeForTimeHours = useTimeForTimeData.getLong("useTimeForTimeHours");

        //TODO:work with db, update avaliable time-for-time hours, Somehow use used hours as a free time

        JsonObject jsonData = JsonCommands.getTimeForTimeHours(hsr);

        if (jsonData != null){
            return Response.ok(jsonData).build();
        } else {
            return Response.status(401).build();
        }
    }

}
