package dom.ssh.dao;

import dom.ssh.modle.userInfo;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;






public class userInfoDaoImpl implements userInfoDao{
	private SessionFactory sessionFactory;
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	public void setUserInfoD(userInfo userInfo) {
		Session session =sessionFactory.getCurrentSession();
		//System.out.println("the last"+score);
		session.beginTransaction();
		System.out.println(userInfo.getUserclass());
		// usif =(userInfo) session.get(userInfo.class,1);
		
		session.save(userInfo);
		session.getTransaction().commit();
	}

}
