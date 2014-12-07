package rotterdam;

import static org.junit.Assert.*;

import java.net.URISyntaxException;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.core.Response;

import model.dao.impl.UserDAOImpl;
import model.dao.inerfaces.UserDAO;

import org.jboss.resteasy.core.Dispatcher;
import org.jboss.resteasy.mock.MockDispatcherFactory;
import org.jboss.resteasy.mock.MockHttpRequest;
import org.jboss.resteasy.mock.MockHttpResponse;
import org.jboss.resteasy.plugins.server.resourcefactory.POJOResourceFactory;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class LoginTest {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {

	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testLoginAuth() throws URISyntaxException {
//		POJOResourceFactory factory = new POJOResourceFactory(UserDAO.class);
//		Dispatcher dispatcher = MockDispatcherFactory.createDispatcher();
//		MockHttpRequest request = MockHttpRequest.get("/api/login");
//		MockHttpResponse response = new MockHttpResponse();
//		JsonObject resultJsonDate = Json.createObjectBuilder()
//				.add("login", "rrrr").add("password", "sdfsdf").build();
//		request.content(resultJsonDate.toString().getBytes());
//		dispatcher.invoke(request, response);
//		assertNotEquals(Response.Status.UNAUTHORIZED, response.getStatus());

	}

}
