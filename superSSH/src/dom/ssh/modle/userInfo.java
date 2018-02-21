package dom.ssh.modle;
import java.io.Serializable;


@SuppressWarnings("serial")

public class userInfo implements Serializable{
	private int id;
	private String username;
	private String usergrade;
	private String userclass;
	private String nschool;
	private String ngrade;
	private String nconnection;
	private boolean ifn;
	private String wechatID;

	public userInfo() {}
	public userInfo(String username,String usergrade,String userclass,String nschool,String ngrade,String nconnection,boolean ifn,String wechatID) {
		this.username = username;
		this.usergrade = usergrade;
		this.userclass = userclass;
		this.nschool = nschool;
		this.ngrade = ngrade;
		this.nconnection = nconnection;
		this.ifn = ifn;
		this.wechatID = wechatID;
	
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public int getId() {
		return id;
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
