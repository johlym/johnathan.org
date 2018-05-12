require 'kramdown'

module Jekyll
  class NoteTag < Liquid::Block
    def initialize(tag_name, state, tokens)
      super
      @state = state.strip
    end

    def render(context)
      # Convert the state to an icon and CSS class
      case @state
      when "success"
        css_class = "alert-success"
        icon = "fa-thumbs-up"
      when "info"
        css_class = "alert-info"
        icon = "fa-info-circle"
      when "warning"
        css_class = "alert-warning"
        icon = "fa-exclamation-triangle"
      when "danger"
        css_class = "alert-danger"
        icon = "fa-ban"
      else
        Jekyll.logger.info "Tried to render an Alert Box state that's not supported: #{@state}"
        css_class = "alert-info"
        icon = "fa-info-circle"
      end

      # Write out the HTML for this alert
      text = super
      text = Kramdown::Document.new(text).to_html
      "<div class=\"alert #{css_class}\" role=\"alert\">"\
      "<div class=\"far #{icon} alert-icon\"></div>"\
      "<div class=\"alert-message\">"\
      "#{text}"\
      "</div></div>"
    end
  end
end

Liquid::Template.register_tag('note', Jekyll::NoteTag)