# Django-React-Apps

* Golden rule to use **generics** whenever I have to override the default methods to accomplish different specifications from list and details views.
	+ When your endpoint is very simple and you don't need to customize logic between list/create and retrieve/update/delete operations you can use **viewset**
	
	+ Marking extra actions for routing: use **viewset**