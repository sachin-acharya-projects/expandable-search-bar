# Expandable Search Input
_____
Just trying to keep my Frontend skill from rusting.

## Distribution
____
There are two distribution, _normal_ and _Live Search_.
  **normal**
    It is just a frontend of the search bar with only HTML and CSS

  **Live Search**
    It is fully functional search-bar with backend implemention in conjuction with `MariaDB` database (MySQl).
    For **Configurations**
      a. Navigate to Control Panel (phpMyAdmin) and create a database, *Any Name*
      b. Among the numerous database specific(or not) options on top-side, you can see option named `import`
      c. Click on that and on the next page after clicking it, you would see `Browse` button.
      d. Click on that and navigate to the `.SQL` file (_Can be found on root/SQL directory of this project_). Double click the file
      e. Finally finish the uploading by click `import` or of sorts.
    _This is database specific settings. Now time for configuration on the script_

    Inside `live-search/php` directory, there is a file, `database.php`, by opening it, update as commented.