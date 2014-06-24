#musicguy
Builds a single but effective webpage for a music-guy or music-gal hoping to promote their performances.
The layout is basic, but effective.  Here's how it works.

People...
 
1. Discover the site through linkage of some kind.
2. See the musician's face and/or visual iconography.
3. Listen to an audio sample or two.
4. Watch a video.
5. Look at upcoming events.
6. Go to the event most conveniently located for each with $$$ they want to give you.

# Installation.
There's a couple of ways you could do this.
If you're not afraid of a command line, and you have git, clone this repo.
	
	git clone https://github.com/caesarfeta/musicguy musicguy

Or you can download this repo as a zip.

	https://github.com/caesarfeta/musicguy/archive/master.zip

Then go into the musicguy folder and double click the INSTALL.command file.
Don't be alarmed by the window that pops-up.  That's normal.

# Add events.
Duplicate an event config file in musicguy/config/events.
Open the event config file in a text editor like TextEdit or Notepad.
Fill out that file with event information paying attention so you don't delete the necessary double-quotes and commas.
To remove events either delete or move the event's file out of the events folder and build the page.

# Build the page
Go to the musicguy/build folder and double click BUILD.command to build the page.

# Preview the page
Double click musicguy/index.html.
Media players like YouTube's may not display.
That's okay if you're previewing.
They do that because the page is being opened from your hard-drive.
Some browsers do this for security reasons.

# Copy the site to your webhost.
The only files and folders that should be copied to your webhost are...

	* index.html
	* css
	* js
	* img

After you do this once all you have to copy from then on is index.html... unless you've added a new image or some other file.

# Go to your url and marvel!
