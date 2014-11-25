package model.dao.impl;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import tools.HibernateUtil;
import model.dao.inerfaces.HibernateL2Cache;
import model.dao.inerfaces.SessionDAO;
import model.entity.Session;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;

/**
 * Created by vasax32 on 22.07.14.
 */
public class SessionDAOImpl implements SessionDAO, HibernateL2Cache {

	@Override
	public List<Session> selectAll() {
		org.hibernate.Session session = null;
		List<model.entity.Session> list = null;
		try {
			session = HibernateUtil.getSession();
			list = session.createCriteria(Session.class).list();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null && session.isOpen())
				session.close();
		}
		return list;
	}

	@Override
	public Session selectBySessionId(String sessionId) {
		org.hibernate.Session session = null;
		Session sesobj = null;
		try {
			session = HibernateUtil.getSession();
			sesobj = (Session) session.load(Session.class, sessionId);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null && session.isOpen())
				session.close();
		}

		return sesobj;
	}

	@Override
	public boolean insert(Session sessionObj) {
		org.hibernate.Session session = null;
		try {
			session = HibernateUtil.getSession();
			session.beginTransaction();
			session.save(sessionObj);
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return true;
	}

	@Override
	public boolean delete(Session sessionObj) {
		org.hibernate.Session session = null;
		try {
			session = HibernateUtil.getSession();
			session.beginTransaction();
			session.delete(sessionObj);
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return true;
	}

	@Override
	public boolean deleteBySessionId(String sessionid) {
		org.hibernate.Session session = null;
		Session sessionobj = selectBySessionId(sessionid);
		try {
			session = HibernateUtil.getSession();
			session.beginTransaction();
			session.delete(sessionobj);
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return true;
	}

	@Override
	public boolean update(Session sessionObj) {
		org.hibernate.Session session = null;
		try {
			session = HibernateUtil.getSession();
			session.beginTransaction();
			session.update(sessionObj);
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return true;
	}

}
