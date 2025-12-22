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
git add app.js
git add .
git commit -m "message"

📁 Project Folder Structure
📁 FitTrack
├── 📄 app.js
├── 📄 index.html
├── 📄 README.md

5. Branching
git branch feature
git branch test
git branch bugfix
git branch experiment


7. Merging
git merge feature
git merge test
git merge bugfix
git merge experiment

8. Merge Conflict Handling

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
<img width="1920" height="984" alt="Screenshot (496)" src="https://github.com/user-attachments/assets/9445eb35-02de-4c94-b578-efbf2a9731e4" />
<img width="1920" height="1080" alt="Screenshot (497)" src="https://github.com/user-attachments/assets/4db4bcca-8003-42af-8896-8463575bd9a2" />
<img width="1920" height="1011" alt="Screenshot (498)" src="https://github.com/user-attachments/assets/4c99cfce-6923-49ac-8a92-837b177e748e" />
<img width="1920" height="1017" alt="Screenshot (499)" src="https://github.com/user-attachments/assets/9bcca2fd-f152-4717-9767-5da511ddcc0a" />
<img width="1920" height="1024" alt="Screenshot (501)" src="https://github.com/user-attachments/assets/7925d823-a95b-420f-915a-99e354b25765" />
<img width="1920" height="930" alt="Screenshot (502)" src="https://github.com/user-attachments/assets/b1fe5ed9-7248-48b5-9d76-1dd04e842ea4" />
<img width="1920" height="1014" alt="Screenshot (504)" src="https://github.com/user-attachments/assets/1510d9ef-dfb5-426b-8c9b-343b04f520d4" />
<img width="1920" height="1024" alt="Screenshot (505)" src="https://github.com/user-attachments/assets/1e19e272-63b4-4b6a-a333-48cfa6a78402" />
<img width="1920" height="1021" alt="Screenshot (506)" src="https://github.com/user-attachments/assets/850db7c8-1c24-43ba-8ef1-13d31fa40f1e" />
<img width="1187" height="1021" alt="Screenshot (507)" src="https://github.com/user-attachments/assets/d534474e-08c5-43d1-811e-8046e5b410cf" />
<img width="1920" height="997" alt="Screenshot (508)" src="https://github.com/user-attachments/assets/43b13398-be9c-4249-8da3-ba6995b422b6" />
<img width="1920" height="1011" alt="Screenshot (509)" src="https://github.com/user-attachments/assets/5db0bd86-bcc7-4bc0-92ba-84fab776155b" />
<img width="1920" height="1021" alt="Screenshot (510)" src="https://github.com/user-attachments/assets/b108c348-b707-48e8-8d9d-86d622fc7bd9" />
<img width="1920" height="1021" alt="Screenshot (511)" src="https://github.com/user-attachments/assets/ef083c21-c14d-4559-a8cf-78ccf777edda" />
<img width="1920" height="1011" alt="Screenshot (512)" src="https://github.com/user-attachments/assets/015f39f3-c86f-4cea-ab13-8cf80d288e01" />
<img width="1920" height="1031" alt="Screenshot (513)" src="https://github.com/user-attachments/assets/f3b7bf4c-27ca-4dc3-a57a-48f1dfb25d17" />
<img width="1920" height="1017" alt="Screenshot (514)" src="https://github.com/user-attachments/assets/56dc68ce-0712-4353-8287-2f9be6a4217d" />
<img width="1920" height="1021" alt="Screenshot (515)" src="https://github.com/user-attachments/assets/415dfb93-99f6-4c30-9373-dc128e43a4c7" />


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
