#build.py

import buildLib
import os
import pprint
import datetime
import calendar
import operator

def getUnix( _pyt ):
	return _pyt['unix']

def eventConfigs():
	events = os.listdir( '../config/events' )
	out = []
	for event in events:
		pyt = buildLib.jsonFileToPython( '../config/events/' + event )
		
#		pp = pprint.PrettyPrinter(indent=4)
#		pp.pprint( pyt )
#		print pyt['date']

		# Now extract extra info from the date
		d = datetime.datetime.strptime( pyt['date'],"%m/%d/%Y" )
		pyt['year'] = d.year
		pyt['month'] = d.strftime('%B')
		pyt['day'] = d.day
		pyt['weekday'] = d.strftime('%A')
		pyt['unix'] = calendar.timegm( d.utctimetuple() )
		out.append( pyt )
		
	# Return all the events sorted by date
	return sorted( out, key=getUnix )
	
def mainConfig():
	return buildLib.jsonFileToPython( '../config/config.json' )
	
def build():
	# Get the main config
	data = mainConfig()
	
	# Get the events
	data['events'] = eventConfigs()
	
	# Check out the data structure before it goes to the parser
#	pp = pprint.PrettyPrinter(indent=4)
#	pp.pprint( data )
	
	# Parse the homepage
	buildLib.parseTemplate( "../tmpl/index.tmpl", "../index.html", data )
	
build()