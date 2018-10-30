from CTFd import utils
from CTFd.plugins import register_plugin_assets_directory, register_plugin_script
import time

def load(app):
    register_plugin_assets_directory(app, base_path='/plugins/ctfd-event-countdown/assets/')
    register_plugin_script('/plugins/ctfd-event-countdown/assets/countdown.js')
    app.jinja_env.globals.update(ctf_starts_in=ctf_starts_in)
    app.jinja_env.globals.update(ctf_ends_in=ctf_ends_in)

def ctf_starts_in():
    """ If the CTF has a start time, returns number of seconds before CTF starts. Returns 0 otherwise. """
    start = utils.get_config("start")
    if start:
        start = int(start)
        now = int(time.time())
        if start > now:
            return start - now
    return 0

def ctf_ends_in():
    """ If the CTF has an end time, returns number of seconds before CTF ends. Returns 0 otherwise. """
    end = utils.get_config("end")
    if end:
        end = int(end)
        now = int(time.time())
        if end > now:
            return end - now
    return 0
