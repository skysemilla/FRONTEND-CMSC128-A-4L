import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {css} from './../style.css'

export default class sampleFSR extends Component  {
  render() {
    return (
      <div class="generate">
          <p><center>
          <div><b>FACULTY SERVICE RECORD</b></div>
          <div>__ Semester AY _____ – ____</div>
          </center></p>

          <p>
          <div>
          <table class="inv">
            <tr>
              <td class="inv2">PRINTED NAME:</td>
              <td class="inv2">_________________________________</td>
                <td class="inv2">RANK:</td>
                <td class="inv2">_______________________________</td>
            </tr>
            <tr>
              <td class="inv2">&nbsp;</td>
                <td class="inv2">(Family name, Given name, M.I.)</td>
                <td class="inv2">&nbsp;</td>
                <td class="inv2">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] Full-time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] Part-time</td>
            </tr>
            <tr>
              <td class="inv2">HOME DEPARTMENT</td>
                <td class="inv2">________________________________</td>
                <td class="inv2">HOME COLLEGE:</td>
                <td class="inv2">________________________________</td>
            </tr>
          </table>
          </div>
          </p>


          <p><div>
            <b>I. TEACHING LOAD in the COLLEGE</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">SUBJECT</th>
                <th class="thtable">SECTON CODE</th> 
                <th class="thtable">ROOM</th>
                <th class="thtable">DAYS</th>
                <th class="thtable">TIME</th>
                <th class="thtable">HOURS PER WEEK</th>
                <th class="thtable">NO. OF STUDENTS (A)</th>
                <th class="thtable">COURSE CREDIT W/O MULTIPLIERS (B)</th>
                <th class="thtable">STUDENT CREDIT UNITS (A x B)</th>
                <th class="thtable">TEACHING LOAD CREDITS WITH MULTIPLIERS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
               <tr>
                <td colspan="7" class="total">TOTAL Teaching Load Credits</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <center><b><sub>Concurrent teaching load outside the college. Write NON whenever applicable. Please do not leave any blank.</sub></b></center>
            <Divider hidden="true" />
            <table class="inv">
              <tr>
                <td class="inv2">____________________________</td>
                  <td class="inv2">____________________________</td>
                  <td class="inv2">____________________________</td>
              </tr>
              <tr>
                <td class="inv2">COLLEGE OUTSIDE THE UP SYSTEM</td>
                  <td class="inv2">NO. OF SUBJECTS </td>
                  <td class="inv2">NO. OF UNITS (W/O MULTIPLIERS)</td>
              </tr>
              <tr>
                <td class="inv2">&nbsp;</td>
                  <td class="inv2">&nbsp;</td>
                  <td class="inv2">&nbsp;</td>
              </tr>
              <tr>
                <td class="inv2">____________________________</td>
                  <td class="inv2">____________________________</td>
                  <td class="inv2">____________________________</td>
              </tr>
              <tr>
                <td class="inv2">UP COLLEGE / DEPARTMENT</td>
                  <td class="inv2">NO. OF SUBJECTS </td>
                  <td class="inv2">NO. OF UNITS (W/O MULTIPLIERS)</td>
              </tr>
            </table>
            <sub><b>NOTE: A faculty member teaching in another college and/or another Constituent University (CU) should file a separate Form 67 (FSR) in that college and/or CU. In the event that a 2nd or 3rd FSR needs to be prepared, only the teaching load and consultation hours should be completed. Permission fromf the Chancellor should be sought before teaching outside the University.</b></sub>
            <div>
            <Divider hidden="true" />
            <table class="fsrtable">
              <tr>
                  <td class="inv2">Certified Correct:</td>
              </tr>
              <tr>
                  <td class="inv2">________________________________________________</td>
              </tr>
              <tr>
                  <td class="inv2"><b>MYRNA G. CARANDANG</b></td>
              </tr>
              <tr>
                  <td class="inv2">University Registrar</td>
              </tr>
            </table>
            </div>
            </div></p>


            <p><div>
            <div><b>II. RESEARCH/TEXTBOOK WRITING/CREATIVE WORK</b></div>
            <div><b>II. A. RESEARCH</b></div>

            <b>II. A1. RESEARCH PROPOSAL</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">FUNDING AGENCY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Research Work Load Credits (RLC) _______________</div>

            <b>II. A2. RESEARCH IMPLEMENTATION (Please attach Progress Report)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">START DATE<br/>MM/DD/YY</th>
                <th class="thtable">END DATE<br/>MM/DD/YY</th>
                <th class="thtable">FUNDING AGENCY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Research Work Load Credits (RLC) _______________</div>

            <Divider hidden="true" />
            <div><b>II. B. CREATIVE WORK</b></div>

            <b>II. B1. ORAL/POSTER PAPERS PRESENTED IN CONFERENCES (Please attach first page of article)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE, PLACE, PUBLICATION)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">DATE OF PUBLICATION<br/>MM/DD/YY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Creative Work Load Credits (CLC) _______________</div>

            <b>II. B2. PAPERS PUBLISHED IN PROCEEDINGS OF CONFERENCES (Please attach first page of article)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE, PLACE, PUBLICATION)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">DATE OF PUBLICATION<br/>MM/DD/YY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Creative Work Load Credits (CLC) _______________</div>

            <b>II. B3. MONOGRAPHS: manuals, training modules (Please attach first page of article)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE, PLACE, PUBLICATION)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">DATE OF PUBLICATION<br/>MM/DD/YY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Creative Work Load Credits (CLC) _______________</div>

            <b>II. B4. ARTICLES IN REFEREED JOURNALS (Please attach first page of article)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE, PLACE, PUBLICATION)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">DATE OF PUBLICATION<br/>MM/DD/YY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Creative Work Load Credits (CLC) _______________</div>

            <b>II. B5. CHAPTERS IN A BOOK (Please attach first page of article)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE, PLACE, PUBLICATION)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">DATE OF PUBLICATION<br/>MM/DD/YY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Creative Work Load Credits (CLC) _______________</div>

            <b>II. B6. BOOKS (Please attach first page of article)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE, PLACE, PUBLICATION)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">DATE OF PUBLICATION<br/>MM/DD/YY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Creative Work Load Credits (CLC) _______________</div>

            <b>II. B7. OTHERS (e.g. plays, poetry, musical arrangements, etc.) (Please attach copy of program; arrangements, or poetry)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE (SPECIFY COMPLETE TITLE, PLACE, PUBLICATION)</th>
                <th class="thtable">CO-WORKERS INVOLVED</th>
                <th class="thtable">DATE OF PUBLICATION<br/>MM/DD/YY</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Creative Work Load Credits (CLC) _______________</div>
            </div></p>


            <Divider hidden="true"/>
            <p><div>
            <b>III. ADMINISTRATIVE WORK</b>
            <center><sub>Specify if administrative work is inside or outside the college. Include even if no load credit or no honorarium is received.</sub></center>
            <table class="fsrtable">
              <tr>
                <th class="thtable">POSITION/NATURE OF ADMINISTRATIVE WORK</th>
                <th class="thtable">OFFICE/UNIT</th>
                <th class="thtable">APPROVED CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Administrative Load Credits (ALC) _______________</div>
            </div></p>

            <Divider hidden="true"/>
            <p><div>
            <b>IV. EXTENSION AND COMMUNITY SERVICE</b> (e.g. training programs, services, to UP-PGH, Pahinungod, etc.)
            <div><sub>(Include all extension and community service this semester and all work in the immediately preceding semester which were not reported at that time (even if no load credits or honorarium are received). Department Chairs and Deans should afx their initials beside the credit units which they approved or endorsed).</sub></div>

            <b>IV A. TRAININGS</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE OF ACTIVITY/<br/>PROGRAM</th>
                <th class="thtable">NO. OF HOURS<br/>INCLUDING PREPARATION</th>
                <th class="thtable">NO. OF<br/>PARTICIPANTS</th>
                <th class="thtable">START DATE<br/>MM/DD/YY</th>
                <th class="thtable">END DATE<br/>MM/DD/YY</th>
                <th class="thtable">ROLE</th>
                <th class="thtable">FUNDING AGENCY</th>
                <th class="thtable">APPROVED<br/>CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Extension and Community Credits (ELC) _______________</div>

            <b>IV. B. INFORMATION DISSEMINATION (e.g. print, broadcast T.V., online)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE OF ACTIVITY/<br/>PROGRAM</th>
                <th class="thtable">NO. OF HOURS<br/>INCLUDING PREPARATION</th>
                <th class="thtable">NO. OF<br/>PARTICIPANTS</th>
                <th class="thtable">START DATE<br/>MM/DD/YY</th>
                <th class="thtable">END DATE<br/>MM/DD/YY</th>
                <th class="thtable">ROLE</th>
                <th class="thtable">FUNDING AGENCY</th>
                <th class="thtable">APPROVED<br/>CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Extension and Community Credits (ELC) _______________</div>

            <b>IV. C. WORKSHOPS</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE OF ACTIVITY/<br/>PROGRAM</th>
                <th class="thtable">NO. OF HOURS<br/>INCLUDING PREPARATION</th>
                <th class="thtable">NO. OF<br/>PARTICIPANTS</th>
                <th class="thtable">START DATE<br/>MM/DD/YY</th>
                <th class="thtable">END DATE<br/>MM/DD/YY</th>
                <th class="thtable">ROLE</th>
                <th class="thtable">FUNDING AGENCY</th>
                <th class="thtable">APPROVED<br/>CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Extension and Community Credits (ELC) _______________</div>

            <b>IV. D. SYMPOSIUM</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE OF ACTIVITY/<br/>PROGRAM</th>
                <th class="thtable">NO. OF HOURS<br/>INCLUDING PREPARATION</th>
                <th class="thtable">NO. OF<br/>PARTICIPANTS</th>
                <th class="thtable">START DATE<br/>MM/DD/YY</th>
                <th class="thtable">END DATE<br/>MM/DD/YY</th>
                <th class="thtable">ROLE</th>
                <th class="thtable">FUNDING AGENCY</th>
                <th class="thtable">APPROVED<br/>CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Extension and Community Credits (ELC) _______________</div>

            <b>IV. E. OTHERS (e.g. community action services)</b>
            <table class="fsrtable">
              <tr>
                <th class="thtable">TITLE OF ACTIVITY/<br/>PROGRAM</th>
                <th class="thtable">NO. OF HOURS<br/>INCLUDING PREPARATION</th>
                <th class="thtable">NO. OF<br/>PARTICIPANTS</th>
                <th class="thtable">START DATE<br/>MM/DD/YY</th>
                <th class="thtable">END DATE<br/>MM/DD/YY</th>
                <th class="thtable">ROLE</th>
                <th class="thtable">FUNDING AGENCY</th>
                <th class="thtable">APPROVED<br/>CREDIT UNITS</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Extension and Community Credits (ELC) _______________</div>
            </div></p>

            <Divider hidden="true"/>
            <p><div>
            <b>V. STUDY LOAD</b>
            <table class="inv">
              <tr>
                <td class="inv2">Degree Enrolled In:</td>
                <td class="inv2">________________________</td>
                  <td class="inv2">University Enrolled In:</td>
                  <td class="inv2">________________________</td>
              </tr>
              <tr>
                <td class="inv2"><sub>On Full Study Leave w/ Pay?</sub></td>
                  <td class="inv2">Yes _________ No _________</td>
                  <td class="inv2"><sub>Recipient of faculty fellowship?</sub></td>
                  <td class="inv2">Yes _________ No _________</td>
              </tr>
            </table>
            <br/>
            <div>FOR FACULTY MEMBERS WITH SOME TEACHING LOAD BUT ALSO HAVE STUDY LOADS:</div>
            <div>Study Load CREDITS (i.e. study load counted as part of normal 12-unit faculty load)</div>
            <div>Study Load Units (i.e. study load done above a full teaching load)</div>
            <table class="fsrtable">
              <tr>
                <th class="thtable">Course Number</th>
                <th class="thtable">Course Credit</th>
                <th class="thtable">Day/s</th>
                <th class="thtable">Time</th>
                <th class="thtable">School</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total Study Load Credits (SLC) _______________</div>
            <div align="right">TOTAL FACULTY LOAD IN CREDIT UNITS _______________</div>
            </div></p>

            <Divider hidden="true"/>
            <p><div>
            <b>VI. LIMITED PRACTICE OF PROFESSION</b>
            <table class="inv">
              <tr>
                <td colspan="2" class="inv2">Have you applied for official permission for limited practice of profession?</td>
                <td colspan="2" class="inv2">Yes _________ No ________</td>
              </tr>
              <tr>
                <td class="inv2">If yes, indicate date (MM/DD/YY) permission was submitted:</td>
                  <td class="inv2">_______________</td>
                  <td class="inv2">Or approved:</td>
                  <td class="inv2">_______________</td>
              </tr>
            </table>
            </div></p>

            <Divider hidden="true"/>
            <p><div>
            <b>VII. PROFESSORIAL CHAIR or FACULTY GRANT RECIPIENT or NOMINEE</b>
            <table class="inv">
              <tr>
                <td colspan="4" class="inv2">Please write NA on the space on the right if neither a recipient nor a nominee</td>
                <td colspan="2" class="inv2">_________________</td>
              </tr>
              <tr>
                <td colspan="4" class="inv2"><sub>No appointment has been approved as of today but college has already nominated (Y/N):</sub></td>
                <td colspan="2" class="inv2">_________________</td>
              </tr>
              <tr>
                <td class="inv2">PROFESSORIAL CHAIR </td>
                  <td class="inv2">_________________</td>
                  <td class="inv2">GRANT</td>
                  <td class="inv2">_________________</td>
                  <td class="inv2">CHAIR/GRANT TITLE</td>
                  <td class="inv2">_________________</td>
              </tr>
              <tr>
                <td colspan="2" class="inv2">APPROVED START DATE (MM/DD/YY)</td>
                  <td class="inv2">_________________</td>
                  <td colspan="2" class="inv2">END DATE (MM/DD/YY)</td>
                  <td class="inv2">_________________</td>
              </tr>
            </table>
            </div></p>

            <Divider hidden="true"/>
            <p><div>
            <b>VIII. CONSULTATION HOURS:</b> (From U.P. Faculty Manual: “At least 10 hours per week during regular hours.”)
            <center><sub>Please specify definite days and hours; avoid “By appointment.”</sub></center>
            <table class="fsrtable">
              <tr>
                <th class="thtable">DAYS</th>
                <th class="thtable">TIME</th>
                <th class="thtable">PLACE</th>
              </tr>
              <tr>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
                <td class="tdtable">a</td>
              </tr>
            </table>
            <div align="right">Total hours per week _______________</div>
            </div></p>

            <Divider hidden="true"/>
            <p><div>
            <b>IX. CERTIFICATION: </b><br/>
            The faculty member certifies that all the information provided above are correct as of the date of signing.
            By signing below, the Department Chair certifies to the correctness of the reported data on teaching, administrative and study load inside the department. The Dean certifies the correctness of the reported data on teaching , administrative and study load inside the college. (PRINTED NAMES AND SIGNATURES)
            <table class="inv">
              <tr>
                <td class="inv2">_____________________</td>
                  <td class="inv2">____________________</td>
                  <td class="inv2">____________________</td>
                  <td class="inv2">____________________</td>
              </tr>
              <tr>
                <td class="inv2">Faculty</td>
                  <td class="inv2">Director/Chairman</td>
                  <td class="inv2">College Secretary</td>
                  <td class="inv2">Dean</td>
              </tr>
              <tr>
                <td class="inv2">Date: </td>
                  <td class="inv2">Date: </td>
                  <td class="inv2">Date: </td>
                  <td class="inv2">Date: </td>
              </tr>
            </table>
            <sub>NOTE: Every faculty member in residence (i. e. receiving salary from U.P.). including those on full study leave with pay, fellowship or sabbatical is required to fill up a Faculty Service Record every semester or trimester. File copies of this form shall be maintained in the department, in the college and at the Ofce of the Vice Chancellor for Academic Afairs.</sub>
            </div></p>
      </div>
    );
  }
}