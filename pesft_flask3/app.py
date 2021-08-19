
from flask import  Flask, render_template,request


app3 = Flask(__name__)




@app3.route('/')
def index1():
    return render_template("index.html")



if __name__=="__main__":
    app3.run(debug=True)
    






