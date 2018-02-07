package dom.ssh.action;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import dom.ssh.modle.userInfo;
import dom.ssh.service.userInfoService;
public class userInfoAction extends ActionSupport{
		private userInfoService uis;
		
		private String username;
		private String usergrade;
		private String userclass;
		private String nschool;
		private String ngrade;
		private String nconnection;
		private boolean ifn;
		private String wechatID;
		public userInfo usid;
		
		public void test() {
			//usid.setScore(score);
			//System.out.println(usid.getScore());
			
			 usid = new userInfo(1,this.username,this.usergrade,this.userclass,this.nschool,this.ngrade,this.nconnection,this.ifn,this.wechatID);
			
			System.out.println("年级："+this.ngrade);
			System.out.println(this.username);
			System.out.println("是否为新生："+this.ifn);
			/*
			System.out.println(usid.getId());
			System.out.println(usid.getUserclass());
			System.out.println(usid.getUsername());*/
			 this.uis.setUserInfoS(usid);
			
		}
		public void setUserInfoService(userInfoService uifs) {
			this.uis = uifs;
		}   
		
		public void setUsername(String username) {
			this.username = username;
		}
		public String getUsername() {
			return username;
		}
		
		public void setUsergrade(String usergrade) {
			this.usergrade = usergrade;
		}
		public String getUsergrade() {
			return usergrade;
		}
		
		public void setUserclass(String userclass) {
			this.userclass = userclass;
		}
		public String getUserclass() {
			return userclass;
		}
		
		public void setNschool(String nschool) {
			this.nschool = nschool;
		}
		public String getNschool() {
			return nschool;
		}
		
		public void setNgrade(String ngrade) {
			this.ngrade = ngrade;
		}
		public String getNgrade() {
			return ngrade;
		}
		public void setNconnection(String nconnection) {
			this.nconnection = nconnection;
		}
		public String getNconnection() {
			return nconnection;
		}
		
		public void setIfn(boolean ifn) {
			this.ifn = ifn;
		}
		public boolean getIfn() {
			return ifn;
		}
		public void setWechatID(String wechatID) {
			this.wechatID = wechatID;
		}
		public String getWechatID() {
			return wechatID;
		}

	}

	     
		   
	
