from flask import Flask
import json 
from myTempDB import *  
from flask_cors import CORS
from pymongo import MongoClient
from bson import json_util
from flask import request
from google.oauth2 import id_token
from google.auth.transport import requests


app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST'])
def get_matches():
    # return json.dumps(dictionary)
   return get_myMatchesBets()

@app.route("/updateBet", methods=['POST'])
def update_Bet():
    return updateBet()

@app.route("/validateToken", methods=['POST'])
def validate_token():
    return validateToken()

def validateToken():
    data = request.get_json()
    token =  data["token"]
    # print(token)
    # Specify the CLIENT_ID of the app that accesses the backend:
    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        idinfo = id_token.verify_oauth2_token(token, requests.Request())

        # ID token is valid. Get the user's Google Account ID from the decoded token.
        userid = idinfo['sub']
        clientid = idinfo['aud']

        # print("Pass")
        return userid
    except ValueError:
        # Invalid token
        # print("Fail")
        return "Invalid Token"


def updateBet():
    #Login validation with google's token
    googleID = validateToken()
    if googleID == "Invalid Token":
        return "Invalid Token"
    
    data = request.get_json()
    # mybet = myFind(collection="Bets", query={"matchID": data["matchID"]})[0]
    # mybet["countryABet"] = data["countryABet"]
    # mybet["countryBet"] = data["countryBet"]
    # myquery = { "address": "Valley 345" }
    # newvalues = { "$set": { "address": "Canyon 123" } }
    return myUpdate("Bets" ,query={ "matchID": data["matchID"] , "googleID": googleID },newValue={ "$set": { "countryABet": data["countryABet"], "countryBet": data["countryBet"]}})

def get_collection(collectionName):
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = "mongodb://localhost:27017"
   DB_NAME = "WorldCupProject"
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)
   db = client[DB_NAME]
   collection = db[collectionName]
   # Create the database for our example (we will use the same database throughout the tutorial
   return collection

def myFind(collection,query):
    cursor = get_collection(collection).find(query)
    list_cur = list(cursor)
    json_data = json.loads(json_util.dumps(list_cur, indent = 2) )
    return(json_data)

def myUpdate(collection,query,newValue):
    mycol = get_collection(collection)
    # myquery = { "address": "Valley 345" }
    # newvalues = { "$set": { "address": "Canyon 123" } }
    mycol.update_one(query, newValue)
    return myFind(collection,query)

def get_myMatchesBets():
    #Login validation with google's token
    googleID = validateToken()
    if googleID == "Invalid Token":
        return "Invalid Token"

    matches = myFind(collection="Matches", query="")

    # get player bets for each match
    for match in matches:
        mybets = myFind(collection="Bets", query={"matchID": match["matchID"], "googleID": googleID})[0]
        match["countryABet"] = mybets["countryABet"]
        match["countryBet"] = mybets["countryBet"]      
  
    # get countries A flags for each match
    for match in matches:
        country = myFind(collection="Countries", query={"countryLabel": match["countryALabel"]})[0]
        match["countryAImage"] = country["countryImage"]

    # get countries B flags for each match
    for match in matches:
        country = myFind(collection="Countries", query={"countryLabel": match["countryBLabel"]})[0]
        match["countryBImage"] = country["countryImage"]

    # get player points for each match
    for match in matches:
        mybets = myFind(collection="Bets", query={"matchID": match["matchID"], "googleID": googleID})[0]
        countryAScore = match["countryAScore"]
        countryBScore = match["countryBScore"]
        countryABet = mybets["countryABet"]
        countryBBet = mybets["countryBet"]
        points = 0
        if countryABet == countryAScore and countryBBet == countryBScore:
            points = 3
        elif countryABet - countryBBet == countryAScore - countryBScore:
            points = 2
        elif countryABet > countryBBet and countryAScore > countryBScore:
            points = 1
        elif countryABet < countryBBet and countryAScore < countryBScore:
            points = 1
        elif countryABet == countryBBet and countryAScore == countryBScore:
            points = 1
        match["points"] = points
        
    return(json.dumps(matches))

# get_myMatchesBets()   