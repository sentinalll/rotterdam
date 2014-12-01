package tools;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

public class HibernateUtil {

	private static final SessionFactory sessionFactory = buildSessionFactory();

	private static SessionFactory buildSessionFactory() {
			Configuration configuration = new Configuration().configure();
			ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
					.applySettings(configuration.getProperties()).build();
			SessionFactory sessionFactory = configuration
					.buildSessionFactory(serviceRegistry);
			return sessionFactory;
	}

	public static Session getSession() throws HibernateException {
		return sessionFactory.openSession();
	}

	public static void shutdown() {
		// Close caches and connection pools
		sessionFactory.close();
	}
}