class RandomNumberGenerator < Liquid::Tag
  def initialize(tag_name, max, tokens)
     super
     @max = max.to_i || 100
  end

  def render(context)
    rand(@max).to_s
  end
end

Liquid::Template.register_tag('rng', RandomNumberGenerator)