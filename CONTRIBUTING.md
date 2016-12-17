# Contribution Guidelines

### Submitting an Issue

Before you submit your issue, search the archive. It may be that it was already addressed. 
If your issue appears to be a bug, and it hasn't been reported, open a new issue. 
By reducing the number of duplicate issues my attention can go to features. 
Providing the following information will increase the chances of your issue being dealt with quickly:

**Overview of the Issue** - If an error is being thrown, a non-minified stack trace helps. <br>
**Motivation or Use Case** - Explain why this is a bug for you. <br>
**Library Name and Version(s)** - Please indicate if it is a regression bug. <br>
**Browsers and Operating System** - Is this a problem with all browsers or only IE? <br>
**Reproduce the Error** - If possible, provide a live example (using Plunker or JSFiddle).  <br>
Minimally, please provide an unambiguous set of steps to reproduce the issue. <br>
**Related Issues** - Has a similar issue been reported before? <br>
**Suggest a Fix** - If you can't fix the bug yourself, perhaps you can point to what might be 
causing the problem (line of code or commit). <br>

### Submitting a Pull Request

Before you submit your pull request consider the following guidelines:

Search the for an open or closed Pull Request that relates to your submission. 
You don't want to duplicate effort!

**To start** make your changes in a new git branch:

`git checkout -b my-fix-branch master`

Create your patch, including appropriate test cases.

This project uses Karma with Jasmine. You can read about writing unit tests with Jasmine 
(here)[https://jasmine.github.io/edge/introduction]!

**Follow the coding rules**, run the full test suite and ensure that all tests pass, and
adhere to the commit message conventions. This helps keep track of each aspect of the project.

`git commit -a`

Note: The optional commit -a command line option will automatically "add" and "rm" edited files.

Build your changes locally to ensure all the tests pass

`npm test`

Push your branch to GitHub:

`git push origin my-fix-branch`

In GitHub, send a Pull Request to the master branch.

**If changes are suggested**:

Make the required updates.
Re-run the test suite to ensure tests are still passing.
Rebase your branch and force push to your GitHub Repository (this will update your Pull Request):

`git rebase master -i`
`git push -f`

### After Your Pull Request is Merged

After your pull request is merged, you can safely delete your branch and pull the changes from 
the main (upstream) repository:

Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

`git push origin --delete my-fix-branch`

Check out the master branch:

`git checkout master -f`

Delete the local branch:

`git branch -D my-fix-branch`

Update your master with the latest upstream version:

`git pull --ff upstream master`

### Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

All features or bug fixes must be tested by one or more specs.
Instead of complex inheritance hierarchies, we prefer simple objects.

### Git Commit Guidelines
It's important how git commit messages are formatted. It leads to more readable 
messages that are easy to follow when looking through the project history. 

Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
The subject line of the commit message cannot be longer 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.

#### Type

Please use one of the following:

* feat: A new feature
* fix: A bug fix
* doc: Documentation only changes
* style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* refactor: A code change that neither fixes a bug or adds a feature
* perf: A code change that improves performance
* test: Adding missing tests
* chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

#### Scope

The scope could be anything specifying the location of the commit change. For example view-compiler or logger.

#### Subject

The subject contains a succinct description of the change:

Use the imperative, present tense: "change" not "changed" nor "changes".
Don't capitalize the first letter.
Do not add a dot (.) at the end.

An example commit message might look like the following,

```
doc(contributing): write and format contributing guidelines

The document should include information about making changes, branches, submitting pull requests,
commit formatting, and writing issues.
```

#### Body

The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.
