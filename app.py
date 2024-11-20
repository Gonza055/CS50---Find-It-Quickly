from flask import Flask, request, redirect, render_template
import json

app = Flask(__name__)
if __name__ == "__main__":
	app.run()

@app.route('/')
def mapa():
	with open('static/list.json') as f:
		lista = json.load(f)['list']

	tipo = request.args.get('type')
	try:
		tipo
	except NameError:
		tipo = None

	if tipo == None:
		#inicio
		return render_template("inicio.html", lista=lista)

	else:
		#mapa
		return render_template("mapa.html", lista=lista, tipo=tipo)

@app.errorhandler(404)
def page_not_found(e):
    return redirect('/')