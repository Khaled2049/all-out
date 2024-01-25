import uuid
from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
# from db import climbs

blp = Blueprint("climbs", __name__, description="Operations on climbs")

@blp.route("/climbs/<string:route_name>")
class Climb(MethodView):
    def get(self, route_name):
        try:
            return climbs[route_name]
        except KeyError:
            abort(404, message="Climb not found")

@blp.route("/climbs")
class Climbs(MethodView):
    def get(self):
        return {"climbs": climbs}
