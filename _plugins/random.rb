class RandomNumberGenerator < Liquid::Tag
  def initialize(tag_name, max, tokens)
     super
     @max = 100
     puts max
  end

  def render(context)
    rand(@max).to_s
    puts @max
  end
end

Liquid::Template.register_tag('rng', RandomNumberGenerator)