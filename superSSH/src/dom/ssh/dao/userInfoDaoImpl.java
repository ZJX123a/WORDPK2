package dom.ssh.dao;

import dom.ssh.modle.userInfo;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Expression;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;


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
	public int queryUserInfoD(String weChatID) {
		 int temp = 0;
		 userInfo userinfo = new userInfo();
		 Session session = sessionFactory.getCurrentSession();
		 session.beginTransaction();
		 Query q = session.createQuery("from userInfo userinfo where weChatID = '"+weChatID+"'");
		 List<userInfo> list = q.list();
		 System.out.println(list);
		 session.getTransaction().commit();
		 if(list.size() == 0) {
			 System.out.println(temp);
			 return temp;
			
		 }
		 else {
			 userInfo userinfotemp = list.get(0);
			 temp = userinfotemp.getId();
			 System.out.println(temp);
			 return temp;
		 }
		 
		
	}

}
