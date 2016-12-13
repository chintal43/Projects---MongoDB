var key = 'SmC_pg3ZABGPaGAmkRmB0nD1kSWXY_SP';
function getCategories(){
	$.get('https://api.mongolab.com/api/1/databases/taskmanager2/collections/categories?apiKey='+api_key, function(data){
		var output = '<ul class="list-group">';
		$.each(data, function(key, data){
			output += '<li class="list-group-item category">'+
			data.category_name + '<div class="pull-right"><a class="btn btn-primary btn-edit-category" data-category-id="'+data._id.$oid+'">Edit</a> <a class="btn btn-danger btn-delete-category" data-category-id="'+data._id.$oid+'">Delete</a></div>'
			'</li>';
		})	

		output += '</ul>';
		$('#categories').html(output);
	});
}