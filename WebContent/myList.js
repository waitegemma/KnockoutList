var SimpleListModel = function(tasks) {
	this.firstName = ko.observable("Gemma");
    this.lastName = ko.observable("Waite");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();    
    }, this);
    
    // Current Date
	d = new Date();
	days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
	months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
	this.day = ko.observable(days[d.getDay()]);
	this.num = ko.observable(d.getDate());
	this.month = ko.observable(months[d.getMonth()]);
	
	this.date = ko.computed(function(){
			return this.day() + " " + this.num() + " " + this.month();
	},this);
	// tasks
	this.taskToAdd = ko.observable("");
	this.allTasks = ko.observableArray(["Sleep","Eat"]);
	this.selectedTasks = ko.observableArray(["Sleep"]);
		this.addTask = function(){
			if((this.taskToAdd() != "") && (this.allTasks.indexOf(this.taskToAdd())<0))
				this.allTasks.push(this.taskToAdd());
			this.taskToAdd("");
			};
		this.removeSelected = function() {
			this.allTasks.removeAll(this.selectedTasks());
			this.selectedTasks([]);
		};
		this.sortTasks = function(){
			this.allTasks.sort();
		};
};

ko.applyBindings(new SimpleListModel());