
from flask import  Flask, render_template,request




app4 = Flask(__name__)




@app4.route('/')
def index():
    return render_template("myhtml.html")



if __name__=="__main__":
    app4.run(debug=True)