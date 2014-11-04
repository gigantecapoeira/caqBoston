require 'yaml'

def load_song( song )
  # Check for files that match song in csml
  fnames = Dir.entries('csml')
  matches = []
  fnames.each do |name|
    if name.include? song
      matches.push name
    end
  end
  # Get the content of matched files
  content = {}
  content[song] = {}
  matches.each do |match|
    lang = match.split(/\./)
    # Get the text of the matched file
    content[song][lang[1]] = load_file(match)
  end
  puts content.inspect
end

def chorus?( line )
  if line[0,1] == '*'
    return true
  end
  false
end

def cleanup( line )
  nope = [ '#', '*' ]
  if nope.include?( line[0] )
    line[0] = ''
  end
  line
end

def load_file( file )
  # Initialize config
  config = {}
  stanza = nil
  config["stanzas"] = []
  # Get the text from the file
  text = File.read("csml/#{file}")
  text.each_line do |line|
    # Get rid of newlines
    line.delete!("\n")
    # Find the title
    if line[0,1] == '#'
      config['title'] = cleanup( line )
      next
    end
    # Check for empty lines
    if line == ""
      stanza = stanza == nil ? 0 : stanza+1
      config["stanzas"][stanza] = []
      next
    end
    # Add the line
    item = { "chorus" => chorus?(line), "line" => cleanup(line) }
    config["stanzas"][stanza].push(item)
  end
  config
end

config = YAML.load( File.read('config.yaml'))
config['songs'].each do |song|
  csml = load_song( song )
end