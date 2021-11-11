<?php ?>
<header id="banner" class="body">
        &nbsp;
</header>
<aside id="featured" class="body" align = "justify">
        <article>
                <hgroup align ="center">
                        <h2>Consent Form</h2>
                </hgroup>

                <p>
                        This game is part of a research study conducted at Indian Institute of Technology Mandi.
                </p>
                <p>
                        The purpose of the research is to study the decision-making process in the cyber-security domain.
                </p>

                <h4>Procedures</h4>
                <p>
                        You will perform the role of a hacker and make a series of decisions with the objective of getting the maximum possible points. Your objective will be to attack a computer network.
          </p>

                <h4>Participant Requirements</h4>
                <p>Participation in this study is limited to individuals aged 18 and older.</p>

                <h4>Risks</h4>
                <p>
                        The risks and discomfort associated with participation in this study are no greater than those ordinarily encountered in daily life or during other online activities.
                </p>

                <h4>Benefits</h4>
                <p>
                        There may be no personal benefit from your participation in the study but the knowledge received may be of value to humanity.
                </p>

                <h4>Compensation &amp; Costs</h4>
                <p>
                        You will be compensated for completing the game at the rate initially advertised. You will only be eligible for compensation if you have completed the game in full and supplied the appropriate confirmation code. There is no partial payment if you do not complete the study.
                </p>
                <p>There will be no cost to you if you participate in this study.</p>

                <h4>Confidentiality</h4>
                <p>
                        The data captured for the research does not include any personally identifiable information about you. Your IP address will not be captured and your email address will not be used for identification.
                </p>
                <p>
                        By participating in this research, you understand and agree that we may be required to disclose your consent form, data and other personally identifiable information as required by law, regulation, subpoena or court order. Otherwise, your confidentiality will be maintained in the following manner:
                </p>
                <p>
                        Your data and consent form will be kept separate. Your consent form will be stored in a locked location on our property and will not be disclosed to third parties. By participating, you understand and agree that the data and information gathered during this study may be used by us and published and/or disclosed by us to others outside of relationship. However, your name, address, contact information and other direct personal identifiers in your consent form will not be mentioned in any such publication or dissemination of the research data and/or results by us.
                </p>

                 <h4>Right to Ask Questions &amp; Contact Information</h4><br>
                If you have any questions about this study, you should feel free to ask them by contacting the Principal Investigator at:<br><br>
				<blockquote>
                Dr. Varun Dutt <br>
                Applied Cognitive Science Laboratory<br>
                Indian Institute of Technology Mandi<br>
                Himachal Pradesh, India &hyphen; 175075<br>
                Phone: +91-1905-267150<br>
                Email: varun@iitmandi.ac.in
				 </blockquote>
                <p>&nbsp;</p>

                If you have questions later, desire additional information, or wish to withdraw your participation please contact the Principal Investigator by mail, phone or e-mail in accordance with the contact information listed above.
                <br><br>


</p>

                <!-- <form action="?consent=agree" method="POST"> -->
                <?php
                        echo form_open('main/consent_validation');?>
                        <div class="top">
                                <label for="age">I am age 18 or older.</label>
                        </div>
                        <div class="left">
                        <?php //echo form_input('username');
                        $data_radio1 = array(
                        'name' => 'Age',
                        'id' => 'age_yes',
                        'value' => 1,
                        'checked' => TRUE,
                        );

                        $data_radio2 = array(
                                'name' => 'Age',
                                'id' => 'age_no',
                                'value' => 0,
                        );
                        // echo form_radio($data_radio1);
                        // echo form_radio($data_radio2);
                     echo "<label for=\"age_yes\">".form_radio($data_radio1)." Yes</label>";
                     echo  " <label for=\"age_no\">".form_radio($data_radio2)." No</label>";
                     ?>
                                <!-- <label for="age_yes"><?php echo form_radio($data_radio1);?> Yes</label>
                                <label for="age_no"><?php echo form_radio($data_radio2);?> No</label> -->
                        </div>
                        <div class="clearfix">&nbsp;</div>

                         <?php
                        echo form_open('main/consent_validation');?>
                        <div class="top">
                                <label for="understand">I have read and understood the information above.</label>
                        </div>
                        <div class="left">
                        <?php //echo form_input('username');
                        $data_radio3 = array(
                        'name' => 'understand',
                        'id' => 'understand_yes',
                        'value' => 1,
                        'checked' => TRUE,
                        );

                        $data_radio4 = array(
                                'name' => 'understand',
                                'id' => 'understand_no',
                                'value' => 0,
                        );
                        // echo form_radio($data_radio1);
                        // echo form_radio($data_radio2);
                     echo "<label for=\"understand_yes\">".form_radio($data_radio3)." Yes</label>";
                     echo  " <label for=\"understand_no\">".form_radio($data_radio4)." No</label>";
                     ?>
                                <!-- <label for="age_yes"><?php echo form_radio($data_radio3);?> Yes</label>
                                <label for="age_no"><?php echo form_radio($data_radio4);?> No</label> -->
                                <!-- <label for="understand_yes"><input type="radio" name="understand" id="understand_yes" value="1"> Yes</label>
                                <label for="understand_no"><input type="radio" name="understand" id="understand_no" value="0"> No</label> -->
                        </div>
                        <div class="clearfix">&nbsp;</div>

                         <?php
                        echo form_open('main/consent_validation');?>
                        <div class="top">
                                <label for="participate">I want to participate in this research and continue with the game.</label>
                        </div>
                        <div class="left">
                        <?php //echo form_input('username');
                        $data_radio5 = array(
                        'name' => 'participate',
                        'id' => 'participate_yes',
                        'value' => 1,
                        'checked' => TRUE,
                        );

                        $data_radio6 = array(
                                'name' => 'participate',
                                'id' => 'participate_no',
                                'value' => 0,
                        );
                        // echo form_radio($data_radio1);
                        // echo form_radio($data_radio2);
                     echo "<label for=\"participate_yes\">".form_radio($data_radio5)." Yes</label>";
                     echo  " <label for=\"participate_no\">".form_radio($data_radio6)." No</label>";
                     ?>
                                <!-- <label for="age_yes"><?php echo form_radio($data_radio5);?> Yes</label>
                                <label for="age_no"><?php echo form_radio($data_radio6);?> No</label> -->
                                <!-- <label for="participate_yes"><input type="radio" name="participate" id="participate_yes" value="1"> Yes</label>
                                <label for="participate_no"><input type="radio" name="participate" id="participate_no" value="0"> No</label> -->
                        </div>

                        <div class="clearfix">&nbsp;</div>

                        <div class="top prominent">
                                <br>
                                <!-- <input type="submit" value="Continue &gt;" name="commit"> -->
                                <?php echo form_submit('consent_submit','Submit');?>
                        </div>
                <!-- </form> -->

<?php

	echo form_close();
?>
        </article>
</aside>
<?php ?>
