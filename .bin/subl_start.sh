# get last modified sublime-project file:
subl_project_file=$(ls --sort=t *.sublime-project | head -1)
subl ${subl_project_file}