class FigureImageWithCaptionTag < Liquid::Tag
  def initialize(tag_name, input, tokens)
    super
    array = input.split("|")
    @image_url = array[0]
    @image_caption = array[1]
  end

  def render(context)
    <<~HEREDOC
      <img src="#{@image_url}" border="0">
      <span class="caption">#{@image_caption}</span>
    HEREDOC
  end
end
Liquid::Template.register_tag('figimage', FigureImageWithCaptionTag)