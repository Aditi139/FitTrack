📌 Project Title: FitTrack Pro – Advanced Fitness Tracker
📘 Introduction

FitTrack Pro is a feature-rich fitness tracking platform built using HTML, CSS (Tailwind), JavaScript, and Chart.js.
It includes a weekly workout planner, BMI/BMR calculators, calorie tracker, exercise library, achievements system, history log, workout timers, rest timers, notes section, and dark mode support.

This project was created as part of the Git Bash & GitHub Hands-On Assignment to demonstrate proficiency in:

Setting up a Git repository

Performing staging, committing, and branching

Handling merges and merge conflicts

Using GitHub for remote operations

Writing complete technical documentation

The repository reflects real-world version control practices with structured commits, branches, conflict resolution, and proper workflow.

🧰 Commands Used 

git init


3. Staging & Committing
git add index.html
git add .
git commit -m "message"
git commit -a -m "message"

4. Branching
git branch feature
git branch test
git branch bugfix
git branch experiment
git checkout feature
git checkout main

5. Merging
git merge feature
git merge test
git merge bugfix

6. Merge Conflict Handling

Commands during conflict:

git status
# manually fix <<<<<<< HEAD ... ======= ... >>>>>>>
git add <filename>
git commit -m "Resolved merge conflict"

6. Connecting to GitHub
git remote add origin url
git branch -M main
git push -u origin main

7. Pushing Branches
git push origin feature
git push origin test
git push origin bugfix
git push origin experiment

8. Viewing Commit History
git log 

🖼️ Screenshots 


⚠️ Challenges Faced
1. Handling Merge Conflicts

During merging the feature branch into main, Git detected conflicting changes in app.js.
Understanding conflict markers (<<<<<<<, =======, >>>>>>>) and manually resolving them was essential.

2. Maintaining Clean Commit Messages

Ensuring every commit was meaningful and descriptive required discipline.
I followed a consistent pattern such as:
feat: for new features
fix: for bug fixes
docs: for documentation
chore: for general updates

3. Pushing Multiple Branches
   
Remembering to push all branches individually was a small but notable challenge:
git push origin feature

5. Structuring the README
   
Creating clear documentation that includes intro, commands, screenshots, and reflections required careful organization.

🏁 Conclusion

This Git Bash and GitHub hands-on project provided a complete understanding of version control workflows.
Key learnings include:
Initializing repositories and tracking changes
Creating and managing multiple branches
Performing merges and resolving conflicts
Writing structured commit messages
Using GitHub for remote collaboration
Documenting the entire project professionally
The Advanced Fitness Tracker project now follows proper version control practices and can be expanded further with confidence.
