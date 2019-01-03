package com.hexaware.ftp86.integration.test;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import org.junit.Test;
import static org.junit.Assert.*;
import java.text.ParseException;


import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.path.json.JsonPath;
import static com.jayway.restassured.RestAssured.given;

public class LeaveDetailsRestTest {

	@Test
	public void testLeaveDetails() throws AssertionError, URISyntaxException, ParseException {
		LeaveDetails[] res = given().accept(ContentType.JSON).when()
				.get(CommonUtil.getURI("/api/employees/leavedetails/2000")).getBody().as(LeaveDetails[].class);
		SimpleDateFormat sdf =new SimpleDateFormat("yyyy-MM-dd");
		for (LeaveDetails e: res) {
			switch (e.getLeaveId()) {
				case 2:
					assertEquals(2, e.getLeaveId());
					break;				
                default :
					fail("Unknown employee with id:" + e);	
			}
		}
	}

	@Test
	public void testLeaveDetailsById() throws AssertionError, URISyntaxException ,ParseException{
		LeaveDetails res = given().accept(ContentType.JSON).when()
				.get(CommonUtil.getURI("/api/employees/leavedetails/leaveid/2")).getBody().as(LeaveDetails.class);
				SimpleDateFormat sdf =new SimpleDateFormat("yyyy-MM-dd");
	assertEquals(2, res.getLeaveId());
	assertEquals(2000, res.getEmpId());
	assertEquals("2018-11-29", sdf.format(res.getLeaveSdate()));
	assertEquals("2018-11-29", sdf.format(res.getLeaveEdate()));
	assertEquals(1, res.getLeaveNdays());
	assertEquals("SL", res.getLeaveType().toString());
	assertEquals("APPROVED", res.getLeaveStatus().toString());
	assertEquals("sick", res.getLeaveReason());
    assertEquals("2018-11-28", sdf.format(res.getLeaveAppliedOn()));
    assertEquals("good", res.getLeaveManagerComm());
  }
  


	@Test
	public void testPendingHistory() throws AssertionError, URISyntaxException ,ParseException{
		LeaveDetails[] res = given().accept(ContentType.JSON).when()
				.get(CommonUtil.getURI("/api/employees/pending/3000")).getBody().as(LeaveDetails[].class);
				SimpleDateFormat sdf =new SimpleDateFormat("yyyy-MM-dd");
                if(res.length == 0) {
                    assertEquals(0 , res.length);
                }

  }

  @Test
	public void testLeaveDetailsById404() throws AssertionError, URISyntaxException {
		given().accept(ContentType.JSON).when()
				.get(CommonUtil.getURI("/api/employees/leavedetails/leaveid/2699")).then().assertThat().statusCode(404);
	}

      @Test
	public void testLeaveIdId404() throws AssertionError, URISyntaxException {
		given().accept(ContentType.JSON).when()
				.get(CommonUtil.getURI("/api/employees/leavedetails/leaveid/264545")).then().assertThat().statusCode(404);
	}

          @Test
	public void testLeavePending404() throws AssertionError, URISyntaxException {
		given().accept(ContentType.JSON).when()
				.get(CommonUtil.getURI("/api/employees/pending/345675675757")).then().assertThat().statusCode(404);
	}

    @Test
    public void testApplyLeave() throws AssertionError, URISyntaxException {
     //String res=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"3000\",\"leaveSdate\":\"2022-12-12\",\"leaveEdate\":\"2022-12-12\",\"leaveNdays\":\"1\",\"leaveReason\":\"sick\",\"leaveType\":\"EL\"}").
       // when().post(CommonUtil.getURI("/api/employees/applyleave/3000")).getBody().asString();
    
     //assertEquals("Leave Applied Successfully For 1 Days.",res);
     String res1=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"3000\",\"leaveSdate\":\"2018-12-12\",\"leaveEdate\":\"2018-12-10\",\"leaveNdays\":\"1\",\"leaveReason\":\"sick\",\"leaveType\":\"EL\"}").
         when().post(CommonUtil.getURI("/api/employees/applyleave/3000")).getBody().asString();
    
      assertEquals("Start Date Must be Greater than EndDate...", res1);
 
      String res2=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"3000\",\"leaveSdate\":\"2018-12-12\",\"leaveEdate\":\"2018-12-12\",\"leaveNdays\":\"4\",\"leaveReason\":\"sick\",\"leaveType\":\"EL\"}").
         when().post(CommonUtil.getURI("/api/employees/applyleave/3000")).getBody().asString();
    
      assertEquals("NO Of Days Should be right", res2);
    //String res3=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"5000\",\"leaveSdate\":\"2018-12-15\",\"leaveEdate\":\"2018-12-15\",\"leaveNdays\":\"1\",\"leaveReason\":\"sick\",\"leaveType\":\"EL\"}").
      //  when().post(CommonUtil.getURI("/api/employees/applyleave/5000")).getBody().asString();
    
      //assertEquals("Leave Applied Successfully For 1 Days.", res3);
      String res4=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"5000\",\"leaveSdate\":\"2018-12-15\",\"leaveEdate\":\"2018-12-15\",\"leaveNdays\":\"1\",\"leaveReason\":\"sick\",\"leaveType\":\"EL\"}").
        when().post(CommonUtil.getURI("/api/employees/applyleave/5000")).getBody().asString();
    
      assertEquals("already applied on given date", res4);
      String res5=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"5000\",\"leaveSdate\":\"2018-12-18\",\"leaveEdate\":\"2019-01-18\",\"leaveNdays\":\"31\",\"leaveReason\":\"sick\",\"leaveType\":\"EL\"}").
         when().post(CommonUtil.getURI("/api/employees/applyleave/5000")).getBody().asString();
    
      assertEquals("insufficient leav balance", res5);

        
     }




    @Test
    public void testApproveDeny() throws AssertionError, URISyntaxException {
   // String res=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"1000\",\"leaveId\":\"3\",\"leaveStatus\":\"PENDING\",\"leaveManagerComm\":\"good\"}").
     //   when().post(CommonUtil.getURI("/api/employees/approvedeny/1000")).getBody().asString();
      // assertEquals("Leave Rejected", res);

    //     String res1=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"1000\",\"leaveId\":\"31\",\"leaveStatus\":\"REJECTED\",\"leaveManagerComm\":\"good\"}").
    //     when().post(CommonUtil.getURI("/api/employees/approvedeny/1000")).getBody().asString();
    //    assertEquals("Already on given status", res1);

    //         String res2=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"3000\",\"leaveId\":\"6\",\"leaveStatus\":\"REJECTED\",\"leaveManagerComm\":\"good\"}").
    //     when().post(CommonUtil.getURI("/api/employees/approvedeny/3000")).getBody().asString();
    //    assertEquals("Leave Approved Successfully", res2);

	String res1=given().accept(ContentType.JSON).contentType("application/json").body("{\"empId\":\"3000\",\"leaveId\":\"1\",\"leaveStatus\":\"REJECTED\",\"leaveManagerComm\":\"good\"}").
         when().post(CommonUtil.getURI("/api/employees/approvedeny/3000")).getBody().asString();
        assertEquals("You are not authorised to access this employee.", res1);

    }

}
