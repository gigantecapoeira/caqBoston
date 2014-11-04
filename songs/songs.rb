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
    content[song][lang[1]] = {}
  end
  puts content.inspect
end

config = YAML.load( File.read('config.yaml'))
config['songs'].each do |song|
  csml = load_song( song )
end