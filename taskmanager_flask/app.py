from flask import Flask,render_template, request, redirect
import mysql.connector
 
app = Flask(__name__)

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password='',
  database="tasklistDB"
)
cursor = mydb.cursor()

@app.route("/", methods=['GET','POST'])
def taskmanager():
	if request.method == 'GET':
		return render_template('taskmanager.html')
	elif request.method == 'POST':
		task = request.form.get('task')
		if task:
			sql = 'INSERT INTO listtable (name) VALUES (%s)'
			cursor = mydb.cursor()
			cursor.execute(sql, (task,))
			mydb.commit()
			cursor.close()
			return redirect('/')
		#return render_template('taskmanager.html')

@app.route('/alltasks')
def alltasks():
	#Retrive from DB
	cursor = mydb.cursor()
	cursor.execute('SELECT * FROM listtable')
	task_list = cursor.fetchall()
	cursor.close()
	#typeof = print(type(task_list))
	return render_template('show_tasks.html', show=task_list)

@app.route('/delete', methods=['POST'])
def delete_task():
    task_name = request.form.get('task_name')
    sql = "DELETE FROM listtable WHERE name = %s LIMIT 1"
    cursor.execute(sql, (task_name,))
    mydb.commit()
    return redirect('/alltasks')


@app.route('/update', methods=['POST'])
def update_task():
    old_task = request.form.get('old_task')
    new_task = request.form.get('new_task')
    sql = "UPDATE listtable SET name = %s WHERE name = %s"
    cursor.execute(sql, (new_task, old_task))
    mydb.commit()
    return redirect('/alltasks')
