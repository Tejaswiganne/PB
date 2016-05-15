from tweepy import Stream
from tweepy.streaming import StreamListener
import tweepy
from tweepy import OAuthHandler
 
consumer_key = 'jynAgANjiM7VSgWcEHbD78QQP'
consumer_secret = '6xFlG0YqM9m5VkXnCHXyHgp3NjIQdxo67IaOwUP9ikfY0CsZRh'
access_token = '336916426-FvEBN2qkR40xajixEpIQy3JrOK9oAbVSgcjis6jd'
access_secret = 'zf29V2CzglqygA54N3ycqiH09tll3bUIgHqWGDv3xdx7l'
 
auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_secret)
 
api = tweepy.API(auth)
 
class MyListener(StreamListener):
 
    def on_data(self, data):
        try:
            with open('python.json', 'a') as f:
                f.write(data)
                return True
        except BaseException as e:
            print("Error on_data: %s" % str(e))
        return True
 
    def on_error(self, status):
        print(status)
        return True
 
twitter_stream = Stream(auth, MyListener())
twitter_stream.filter(track=['#NationalChampionship','#ICC ' , 'WT20', 'sports' ,'#ChampOnTBS'])
