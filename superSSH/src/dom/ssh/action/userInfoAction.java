package dom.ssh.action;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.sql.Blob;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import dom.ssh.modle.Hibernate;
import dom.ssh.modle.userInfo;
import dom.ssh.service.userInfoService;
import net.sf.json.JSONObject;
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
		private static String result1;

		//private String code;
		public String queryUserInfo() throws IOException {
			//System.out.println("name:"+this.username);
			ActionContext context=ActionContext.getContext();     

			 HttpServletRequest request = (HttpServletRequest)context.get(ServletActionContext.HTTP_REQUEST);		
			HttpServletResponse response = ServletActionContext.getResponse(); 
			//System.out.println(this.getWechatID());
			this.result1=this.decodeUser(this.wechatID);
			int tempInt =  this.uis.queryUserInfoS(result1);
			System.out.println("openid:"+result1);
			String tempString = Integer.toString(tempInt);
			 request.setCharacterEncoding("utf-8"); 
			    response.setCharacterEncoding("utf-8"); 
			    PrintWriter out = response.getWriter(); 
			    out.write(tempString); 
			    out.flush(); 
			    out.close(); 
			    return null; 
			
		}
		
		public void test() {
			System.out.println("##################");
			//this.wechatID=this.decodeUser(code)
			//result1=this.decodeUser(this.wechatID);
			System.out.println( "code:"+this.wechatID);
			//String code1=this.wechatID;
			//String openid1=this.decodeUser(code1);
			//result1=this.decodeUser(this.wechatID);
			System.out.println("openid:"+result1);
			usid = new userInfo(this.username,this.usergrade,this.userclass,this.nschool,this.ngrade,this.nconnection,this.ifn,result1);
			System.out.println("username:"+this.username);
			//System.out.println("username:"+this.usergrade);
			this.uis.setUserInfoS(usid);
			//return 1;
			
			
		}
		
		public String decodeUser(String code) {  
			  
		       // Map map = new HashMap();  
		  
		        //登录凭证不能为空  
		       /* if (code == null || code.length() == 0) {  
		            map.put("status", 0);  
		            map.put("msg", "code 不能为空");  
		            return map;  
		        }  */
		  
		        //小程序唯一标识   (在微信小程序管理后台获取)  
		        String wxspAppid = "wx1ce310e77f9184a7";  
		        //小程序的 app secret (在微信小程序管理后台获取)  
		        String wxspSecret = "b61aeec5afc0f00071a422dd190385ca";  
		        //授权（必填）  
		        String grant_type = "authorization_code";  
		  
		  
		        //////////////// 1、向微信服务器 使用登录凭证 code 获取 session_key 和 openid ////////////////  
		        //请求参数  
		        String params = "appid=" + wxspAppid + "&secret=" + wxspSecret + "&js_code=" + code + "&grant_type=" + grant_type;  
		        //发送请求  
		        String sr = HttpRequest.sendGet("https://api.weixin.qq.com/sns/jscode2session", params);  
		        //解析相应内容（转换成json对象）  
		       // String srn="\""+sr+"\"";
		       // System.out.println(srn);
		        //JSONObject json = JSONObject.fromObject(srn);  
		       // JSONObject obj = JSONObject.fromObject(srn);
		        //System.out.println(obj);
		        //获取会话密钥（session_key）  
		       // String session_key = json.get("session_key").toString();  
		        //用户的唯一标识（openid）  
		        String openid=sr.split("openid\":\"")[1].split("\"")[0];
		       // String openid = obj.getString("openid");
		        System.out.println("$$$$:"+openid);
			    return openid;
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

	     
		   
	
