
jQuery(document).ready(function($) {
  // Apply nicer tooltips!
  $('a.help-tooltip').tooltip();

  // Thread settings button.
  $('a.harmony-entity-settings-toggle').live('click', function(){
    $(this).next().fadeToggle('fast');
  });
});
