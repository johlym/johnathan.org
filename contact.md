---
title: Contact
layout: page
permalink: /contact.html
---

If you need to get a hold of me, this is the best way to do it.

<script src="https://usebasin.com/f/2083ac5614fa/ahoy.js" async defer></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>


<form class="pure-form pure-form-aligned contact-form" id="contact-form" accept-charset="UTF-8" action="#" method="POST">
    <fieldset>
        <div class="pure-control-group">
            <label for="name">Name</label>
            <input name="name" id="name" type="text" placeholder="which is...">
        </div>
        <div class="pure-control-group">
            <label for="email">Email Address</label>
            <input name="email" id="email" type="email" placeholder="can't forget...">
        </div>
        <div class="pure-control-group">
            <label for="message">Message</label>
            <textarea name="message" id="message" type="text" placeholder="so write something memorable..." rows="10" cols="25"></textarea>
        </div>
        <div class="pure-controls">
            <div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>
        </div>
        <div class="pure-controls">
        <button class="pure-button pure-button-primary g-recaptcha">Submit</button>
        </div>
    </fieldset>
</form>

<script>
var $contactForm = $('.contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
    console.log(JSON.parse('{"' + decodeURI(data).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}'));
    $.ajax({
    url: "https://usebasin.com/f/2083ac5614fa.json",
    method: 'POST',
    data: data,
    dataType: 'json',
    beforeSend: function() {
        $contactForm.append(`
        <div class="alert alert-info sending-message"><div class="far fa-spinner fa-pulse alert-icon"></div>
        <div class="alert-message">Sending message...</div>
        </div>`);
    },
    success: function(data) {
        $contactForm.find('.sending-message').hide();
        $contactForm.append(`
        <div class="alert alert-success"><div class="far fa-thumbs-up alert-icon"></div>
        <div class="alert-message">Message sent successfully!</div>
        </div>`);
    },
    error: function(err) {
        $contactForm.find('.sending-message').hide();
        $contactForm.append(`
        <div class="alert alert-danger"><div class="far fa-ban alert-icon"></div>
        <div class="alert-message">Something broke. Reload and try again?</div>
        </div>`);
    }
    });
    $contactForm.each(function(){
    this.reset();
    });
});
</script>