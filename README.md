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
<img width="1920" height="1080" alt="Screenshot (339)" src="https://github.com/user-attachments/assets/88f538dd-940c-4bef-a9c9-813e9c4bdb45" />
<img width="1920" height="1080" alt="Screenshot (340)" src="https://github.com/user-attachments/assets/92cd9194-7b36-4f1f-ab6c-e96d4e3afe8b" />
<img width="1920" height="1080" alt="Screenshot (341)" src="https://github.com/user-attachments/assets/9fb8e47e-cfb6-481e-a241-512b6057c1c7" />
<img width="1920" height="1080" alt="Screenshot (342)" src="https://github.com/user-attachments/assets/2f0a51b3-0555-426c-b46e-baa0160e0e76" />
<img width="1920" height="1080" alt="Screenshot (343)" src="https://github.com/user-attachments/assets/356ca4fc-864c-422e-9bb8-c28c2dba06f3" />
<img width="1920" height="1080" alt="Screenshot (344)" src="https://github.com/user-attachments/assets/124298b2-f4b7-4310-acb2-a05b980ba316" />
<img width="1920" height="1080" alt="Screenshot (345)" src="https://github.com/user-attachments/assets/1ee9b161-f7ec-42e8-88ea-2bcc915e6510" />
<img width="1920" height="1080" alt="Screenshot (346)" src="https://github.com/user-attachments/assets/b24bd0ee-98bd-4fa8-adbd-af634a3cbb99" />
<img width="1920" height="1080" alt="Screenshot (347)" src="https://github.com/user-attachments/assets/d183377f-6920-4a96-9eb7-c079345427af" />
<img width="1920" height="1080" alt="Screenshot (348)" src="https://github.com/user-attachments/assets/6162e45e-02a1-42e4-bcee-7146c57e934b" />
<img width="1920" height="1080" alt="Screenshot (349)" src="https://github.com/user-attachments/assets/91d396e3-1ec2-4a5b-9b0d-9f99f9eb32fa" />
<img width="1920" height="1080" alt="Screenshot (350)" src="https://github.com/user-attachments/assets/ca52146a-69d0-4f91-a136-1f15b761b152" />
<img width="1920" height="1080" alt="Screenshot (351)" src="https://github.com/user-attachments/assets/d7462f40-aa14-4e55-b3ba-b0d0f51532aa" />
<img width="1920" height="1080" alt="Screenshot (352)" src="https://github.com/user-attachments/assets/5a5ed802-3a95-4ab2-87de-0d2019554ecc" />
<img width="1920" height="1080" alt="Screenshot (353)" src="https://github.com/user-attachments/assets/b900052d-4efc-4dc6-ba7b-1c36bc3c388f" />
<img width="1920" height="1080" alt="Screenshot (354)" src="https://github.com/user-attachments/assets/f0174abe-011e-46d3-b024-429029cb1e5a" />
<img width="1920" height="1080" alt="Screenshot (355)" src="https://github.com/user-attachments/assets/e5d96a56-b35b-45b7-9f43-b5cdaa053d9d" />
<img width="1920" height="1080" alt="Screenshot (356)" src="https://github.com/user-attachments/assets/f9281eb8-b0cc-4fb5-b324-8e34053a235b" />
<img width="1920" height="1080" alt="Screenshot (357)" src="https://github.com/user-attachments/assets/52b08ee8-f43d-4830-96e4-0b323ecd0502" />
<img width="1920" height="1080" alt="Screenshot (358)" src="https://github.com/user-attachments/assets/24869454-f004-4ea9-87b0-c2aadf1c80db" />
<img width="1920" height="1080" alt="Screenshot (359)" src="https://github.com/user-attachments/assets/5533cdac-a958-4e92-81cf-4020d439b102" />
<img width="1920" height="1080" alt="Screenshot (360)" src="https://github.com/user-attachments/assets/a0041937-8c97-44cd-a496-253861cde8af" />
<img width="1920" height="1080" alt="Screenshot (361)" src="https://github.com/user-attachments/assets/c43663f5-afdc-4d2b-bd3a-8d6f6284f700" />
<img width="1920" height="1080" alt="Screenshot (362)" src="https://github.com/user-attachments/assets/af7ae5a2-6d2e-4c45-876c-c9d7e61f75e0" />



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
