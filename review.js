story_no = 0;
function add_new_story() {
	var input = $("#input_div");

	new_story =$("<div />").attr("id", "story").addClass("new_story");
	story_no = story_no +1;
	title= $("<div / >").attr("id", "story_title");
	tags = $("<div / >").attr( "id", "story_tags");

	var t = $(input).children(':first').val();
	 
	 	
		$(input).children('.show').each(function(){
			var i = $("<div />");		
		 	i.text($(this).val());
			
		 	i.appendTo(title);
		
		});

		new_tag = $("<div />").attr("id","tag_search").text($("#input_div .show_tags1").val());
		new_tag.appendTo(tags);
		var tag_string = $("#input_div .show_tags").val();
		var tag_list = tag_string.split(',');
	
		for (i = 0; i< tag_list.length; i++)
		{
			new_tag = $("<div / >").attr("id","tag_search").text(tag_list[i])
			new_tag.appendTo(tags)
		}

		title.appendTo(new_story)
		tags.appendTo(new_story)
	 	new_story.appendTo($("#show_div"))
}




$(document).ready(function(){

	$("#show_div").delegate("#tag_search","click",function(){
		var tag = $(this).text()

		var result_divs = $("div#story:contains("+tag+")").clone();
		
		for(var i = 0; i<  $("#tags_div").children().length; i++)
			{
					
				$("#tags_div").children(":last").detach();

			}
		result_divs.appendTo($("#tags_div"));
		});

});




























