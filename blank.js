/* initialize jsPsych */
    var jsPsych = initJsPsych({
        show_progress_bar: true,
            // minimum_valid_rt: 9000,
  on_finish: function() {
 window.location.replace("https://physion-benchmark.github.io/")      }
    });    
    /* create timeline */
    var timeline = [];

    var preload = {
      type: jsPsychPreload,
      videos: ['video/vid1.mp4']
    };
    timeline.push(preload);

var consent = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'By completing this study, you are participating in a \
    study being performed by cognitive scientists in the UC San Diego \
    Department of Psychology. The purpose of this research is to find out\
    how people understand visual information. \
    You must be at least 18 years old to participate. There are neither\
    specific benefits nor anticipated risks associated with participation\
    in this study. Your participation in this study is completely voluntary\
    and you can withdraw at any time by simply exiting the study. You may \
    decline to answer any or all of the following questions. Choosing not \
    to participate or withdrawing will result in no penalty. Your anonymity \
    is assured; the researchers who have requested your participation will \
    not receive any personal information about you, and any information you \
    provide will not be shared in association with any personally identifying \
    information. Press "Y" to continue.',
      choices: ['Y','y'],

};      
timeline.push(consent);

var consent2  = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: 'If you have questions about this research, please contact the  researchers by sending an email to <b> cogtoolslab.requester@gmail.com </b>.  These researchers will do their best to communicate with you in a timely, professional, and courteous manner. If you have questions regarding your rights as a research subject, or if problems arise which you do not feel you can discuss with the researchers, please contact the UC San Diego Institutional Review Board.',
      choices: ['Y','y']
};      
timeline.push(consent2);

var consent3 = {
   type: jsPsychHtmlButtonResponse,
  choices: ['Next'],
  stimulus: 'We expect this study to take approximately 10 to 15 minutes to complete, including the time it takes to read these instructions. If you encounter a problem or error, send us an email (cogtoolslab.requester@gmail.com) and we will make sure you are compensated for your time! Please pay attention and do your best! Thank you!',
 choices: ['Next']
};      
timeline.push(consent3);

    var instructions = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: "You will be shown a series of physical scenarios. For each scenario, you will be asked how the scenario will evolve and have two response buttons (yes/no). Once you complete this process for several scenarios, you will receive a score showing how many were correct. Press the Y key to begin.",
      choices: ['y','Y'],
    };
    timeline.push(instructions);


var fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: "NO_KEYS",
  trial_duration: 1300,
};
timeline.push(fixation);

// var vid1 = {
//   type: jsPsychVideoButtonResponse,
//   stimulus: [
//     'video/vid1.mp4'
//   ],
//   choices: ['Yes', 'No'],
//   prompt: "<p>Will the ball make it into the goal?</p>",
//   response_allowed_while_playing: false,
// };
// timeline.push(vid1);

var vid1 = {
  type: jsPsychVideoKeyboardResponse,
  stimulus: [
    'video/vid1.mp4'
  ],
height: 330,
  choices: "NO_KEYS",
  trial_ends_after_video: true
};

timeline.push(vid1);

var get_random_choices = () => {
    if (Math.random() > 0.5) {
      return ["NO", "YES"];
    } else {
      return ["YES", "NO "];
    }
  };
  var choices = get_random_choices(); //randomize button order
var vid1response = {
   type: jsPsychHtmlButtonResponse,
   stimulus: 'Will the ball make it into the goal?',
  choices: ['Yes', 'No'] ,

};
var vid1responsee = {
  type: jsPsychHtmlSliderResponse,
    stimulus: `How confident are you in your answer?`,
    require_movement: true,
    labels: ['0: No Confidence', '1: Slight Confidence', '2: Moderate Confidence', '3: High Confidence']
};
timeline.push(vid1response);
timeline.push(vid1responsee);

var vid2 = {
  type: jsPsychVideoKeyboardResponse,
  stimulus: [
    'video/vid2.mp4'
  ],
  height: 330,
  choices: "NO_KEYS",
  trial_ends_after_video: true
};

timeline.push(vid2);

  var age = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<p>What is your age?</p>',
  html: '<p>My age is <input type="number" id="test-resp-box" name="response" required size="10" /></p>',
  autofocus: 'test-resp-box',
};
timeline.push(age);

var exitsurvey2 = {
    type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "What is your sex?", 
      name: "participantSex",
      options: ['Male', 'Female', 'Neither/Other/Do Not Wish To Say'], 
      required: true
    }, 
    {
      prompt: "What is the highest level of education you have completed?", 
      name: "participantEducation",
      options: [ "High school",
          "Some high school",
          "Bachelor’s degree",
          "Master’s degree",
          "Ph.D. or higher",
          "Associates degree",
          "Trade school",
          "Prefer not to say",
          "Other"], 
      required: true
    }
  ],
};
  timeline.push(exitsurvey2);
  
  
var endexperiment = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'Did you encounter any technical difficulties while completing this study? \
          This could include: images were glitchy (e.g., did not load), ability to click \
          was glitchy, or sections of the study did \
          not load properly'}
  ],
  options: ['no','yes'],
      name: "technicalDifficultiesBinary",

};
timeline.push(endexperiment);

var redirection = {
  type: jsPsychHtmlKeyboardResponse,
    stimulus: 'You are now done with this experiment. Thank you!',
    choices: "NO_KEYS",
    trial_duration: 2000,
}

timeline.push(redirection);



jsPsych.run(timeline);
