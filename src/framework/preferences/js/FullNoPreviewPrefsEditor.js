var fluid_2_0_0=fluid_2_0_0||{};!function($,fluid){"use strict";fluid.defaults("fluid.prefs.fullNoPreview",{gradeNames:["fluid.prefs.prefsEditorLoader"],components:{prefsEditor:{container:"{that}.container",options:{listeners:{afterReset:[{listener:"{that}.applyChanges"},{listener:"{that}.save"}],onReady:{listener:"{fullNoPreview}.events.onReady",args:"{fullNoPreview}"}}}}},events:{onReady:null}})}(jQuery,fluid_2_0_0);