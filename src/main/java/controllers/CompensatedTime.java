package controllers;

/**
 * Created by Vasya on 02.12.2014.
 */


import tools.json.JsonCommands;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;

import javax.json.JsonException;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
@PermitAll
public class CompensatedTime {

    @RolesAllowed({ "Driver" })
    @POST
    @Path("/cmptime")
    //@Consumes({ MediaType.APPLICATION_JSON })
    @Produces({MediaType.APPLICATION_JSON})
    public Response getCompensatedTime(@Context HttpServletRequest hsr ) throws JsonException {
        JsonObject jsonData = JsonCommands.getUserCompensatedTime(hsr);

        if (jsonData != null){
            return Response.ok(jsonData).build();
        } else {
            return Response.status(401).build();
        }
    }


}
