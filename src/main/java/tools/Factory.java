package tools;

import model.dao.impl.RuleTypeDAOImpl;
import model.dao.impl.SessionDAOImpl;
import model.dao.impl.UserDAOImpl;
import model.dao.impl.UserRoleDAOImpl;
import model.dao.inerfaces.RuleTypeDAO;
import model.dao.inerfaces.SessionDAO;
import model.dao.inerfaces.UserDAO;
import model.dao.inerfaces.UserRoleDAO;

public class Factory {
	private static UserDAO userDAO = null;
	private static SessionDAO sessionDAO = null;
	private static UserRoleDAO userRoleDAO = null;
	private static RuleTypeDAO ruleTypeDAO = null;

	private static class InstanceHolder {
		private static final Factory instance = new Factory();
	}

	/**
	 * @return инстанс фабрики
	 */
	public static Factory getInstance() {
		return InstanceHolder.instance;
	}

	public UserDAO getUserDAO() {
		if (userDAO == null) {
			userDAO = new UserDAOImpl();
		}
		return userDAO;
	}

	public SessionDAO getSessionDAO() {
		if (sessionDAO == null) {
			sessionDAO = new SessionDAOImpl();
		}
		return sessionDAO;
	}

	public RuleTypeDAO getRuleTypeDAO() {
		if (ruleTypeDAO == null) {
			ruleTypeDAO = new RuleTypeDAOImpl();
		}
		return ruleTypeDAO;
	}

	public UserRoleDAO getUserRoleDAO() {
		if (userRoleDAO == null) {
			userRoleDAO = new UserRoleDAOImpl();
		}
		return userRoleDAO;
	}
}
